drop view if exists "UsrVwLeadToOpportunityLogTableView";
create view "UsrVwLeadToOpportunityLogTableView" AS 
select "SysLeadLog"."Id"  as "UsrVwId",
"SysLeadLog"."ChangeTrackedOn" as "UsrvwStartDate",
Lead("ChangeTrackedOn",1)Over(partition by "ChangeTrackedId" order by "ChangeTrackedOn") as "UsrvwEndDate",
"SysLeadLog"."ChangeTrackedId" as "UsrvwChangeTrackedId",
"SysLeadLog"."ChangeTrackedById" as "UsrvwChangeTrackedById",
"SysLeadLog"."ChangeTypeId" as "UsrvwChangeTypeId",
"SysLeadLog"."UsrLeadOpportunityStages" as "UsrvwUsrLeadFlow"
from "SysLeadLog" ;