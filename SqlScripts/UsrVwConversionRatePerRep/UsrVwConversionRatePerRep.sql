drop view if exists "UsrVwConversionRatePerRep";
create view "UsrVwConversionRatePerRep" AS
select uuid_generate_v4() as "UsrId","c"."Name" as "UsrOwnerName","l"."OwnerId" as"UsrOwnerId",count(*) as "UsrTotalLeads",
count(*) filter (where "l"."UsrLeadOpportunityStagesId" = 'a2f1e837-a2f7-465b-8045-7b5fc27d27bd') as "UsrTotalCLosedWon",
round(100 * COALESCE(count(*) filter (where "l"."UsrLeadOpportunityStagesId" = 'a2f1e837-a2f7-465b-8045-7b5fc27d27bd'),0) /COALESCE(count(*),0) ,1 )  as "UsrConversionRate"
from "Lead" as l 
join "Contact" as c on "c"."Id" = "l"."OwnerId" 
group by "c"."Name","l"."OwnerId";