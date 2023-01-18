CREATE or REPLACE FUNCTION spNoofLeadsAndOpportunities(stage text)
returns int
 language plpgsql as
$func$
declare 
leadOpportunityCount integer;

BEGIN 
	select count(*) into leadOpportunityCount
	from "Lead"
	join "UsrCurrentStage" ON "UsrCurrentStage"."Id" = "Lead"."UsrCurrentStageId"
	where "UsrCurrentStage"."Name"  = stage;

return leadOpportunityCount;
	
END;
$func$;
create or replace function spNoofOpportunitesByStage(stage text)
returns int
language plpgsql as 
$$
declare _count integer;
begin
select count(*) into _count 
from "Lead" as l
join "UsrLeadOpportunityStages" as ulos on "ulos"."Id" = "l"."UsrLeadOpportunityStagesId"
where ulos."Name" = stage;
return _count;
end;
$$;
drop view if exists "UsrvwConversionRateAwaitingSaleToClosedWon";
CREATE VIEW "UsrvwConversionRateAwaitingSaleToClosedWon" AS 
select  "SysSchema"."Id"  as "UsrvwId",spNoofOpportunitesByStage('Closed Won') As "UsrClosedWonCount", spNoofLeadsAndOpportunities('Opportunity') As "UsrTotalOpportunititesCount", 
	round(100 * COALESCE(spNoofOpportunitesByStage('Closed Won'),0) /COALESCE(spNoofLeadsAndOpportunities('Opportunity'),0) ,1 )  as "UsrConversionRate"
  from "SysSchema" where "Name" like 'Lead' limit  1;
