
drop view if exists "UsrVwGetClosedWonRecords" cascade;
create view "UsrVwGetClosedWonRecords" as
select  "l"."Id","ulos"."Name"  from "Lead" as "l" 
join "UsrLeadOpportunityStages" as "ulos" on "ulos"."Id"  = "l"."UsrLeadOpportunityStagesId"
where "ulos"."Name" = 'Closed Won'; 

drop view if exists "UsrVwLeadToOpportunityLogTableView";
create view "UsrVwLeadToOpportunityLogTableView" AS 
select "SysLeadLog"."Id"  as "UsrVwId",
"SysLeadLog"."ChangeTrackedOn" as "UsrvwStartDate",
Lead("ChangeTrackedOn",1)Over(partition by "ChangeTrackedId" order by "ChangeTrackedOn") as "UsrvwEndDate",
"SysLeadLog"."ChangeTrackedId" as "UsrvwChangeTrackedId",
"SysLeadLog"."ChangeTrackedById" as "UsrvwChangeTrackedById",
"SysLeadLog"."ChangeTypeId" as "UsrvwChangeTypeId",
"SysLeadLog"."UsrLeadOpportunityStages"  as "UsrvwUsrLeadFlow"
from "SysLeadLog" ;

create or replace function spGetdifferenceDates(id uuid)
returns int
language plpgsql as 
$$
declare awaitingSaleDateTime timestamp;
closedWonDateTime timestamp;
daysDifference int;
begin 
	select min("UsrvwStartDate") into awaitingSaleDateTime from "UsrVwLeadToOpportunityLogTableView" 
	where "UsrvwChangeTrackedId" = id
	group by "UsrvwUsrLeadFlow" having "UsrvwUsrLeadFlow" = 'Awaiting Sale';
	select min("UsrvwStartDate") into closedWonDateTime from "UsrVwLeadToOpportunityLogTableView" 
	where "UsrvwChangeTrackedId" = id
	group by "UsrvwUsrLeadFlow" having "UsrvwUsrLeadFlow" = 'Closed Won';
	if	awaitingSaleDateTime is not null and closedWonDateTime is not null then
		return closedWonDateTime::date-awaitingSaleDateTime::date;
	else
	return null;
	end if;
end;
$$;

drop view if exists "UsrVwConversionTime" cascade;
create view "UsrVwConversionTime" as 
select uuid_generate_v4() as "UsrVwId", count(*) filter (where "l"."DaysDifference" <= 3) as "UsrWithin3Days" , 
count(*) filter (where "l"."DaysDifference" <= 7 and "l"."DaysDifference" > 3 ) as "UsrInOneWeeek",
count(*) filter (where "l"."DaysDifference" <= 30 and "l"."DaysDifference" > 7) as "UsrInOneMonth",
count(*) filter (where "l"."DaysDifference" > 30) as "UsrGreaterThanOneMonth"
from 
(select * ,spGetdifferenceDates("Id") as "DaysDifference" from "UsrVwGetClosedWonRecords") as "l"
where "l"."DaysDifference" is not null
group by "l"."Id";