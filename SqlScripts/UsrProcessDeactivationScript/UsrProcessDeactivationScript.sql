
-- Deactivate OOTB BP - "Lead management 7.8.0 (Lead Finance)"

do $DisableBP1LeadManagement$
declare
   schemaid1 varchar;

   begin

  schemaid1 :=( select "Id"  
   from "SysSchema" ss 
  where "Caption"  = 'Lead management 7.8.0 (Lead Finance)');
 
 if not exists (select 1 from "SysProcessDisabled" spd where "SysSchemaId" = schemaid1)
 
 then 
 insert into "SysProcessDisabled" ("Id","CreatedOn" ,"CreatedById" ,"ModifiedOn" , "ModifiedById","Name","Description", "ProcessListeners", "SysSchemaId")
 values ('bc53d106-09b8-46c6-aae3-abbc8fd45981','2022-10-10 14:51:24.568','410006E1-CA4E-4502-A9EC-E54D922D2C00',
 '2022-10-10 14:51:24.568','410006E1-CA4E-4502-A9EC-E54D922D2C00', '', '',0, schemaid1);

end if;

end; $DisableBP1LeadManagement$;

--------------------------------------------------------------------------------------------

-- Deactivate OOTB BP - "Lead qualification 7.8.0"

do $DisableBP2LeadQualification$
declare
   schemaid2 varchar;

   begin

  schemaid2 :=( select "Id"  
   from "SysSchema" ss 
  where "Caption"  = 'Lead qualification 7.8.0');
 
 if not exists (select 1 from "SysProcessDisabled" spd where "SysSchemaId" = schemaid2)
 
 then 
 insert into "SysProcessDisabled" ("Id","CreatedOn" ,"CreatedById" ,"ModifiedOn" , "ModifiedById","Name","Description", "ProcessListeners", "SysSchemaId")
 values ('13fbb2cc-fc46-4236-9cbc-7e87f0a5506d','2022-10-10 14:51:24.568','410006E1-CA4E-4502-A9EC-E54D922D2C00',
 '2022-10-10 14:51:24.568','410006E1-CA4E-4502-A9EC-E54D922D2C00', '', '',0, schemaid2);

end if;

end; $DisableBP2LeadQualification$;

-------------------------------------------------------------------------------------------

--Deactivate BP - Handoff to sales 7.8.0 (Lead Finance)

do $DisableBP3HandOffSales$
declare
   schemaid3 varchar;

   begin

  schemaid3 :=( select "Id"  
   from "SysSchema" ss 
  where "Caption"  = 'Handoff to sales 7.8.0 (Lead Finance)');
 
 if not exists (select 1 from "SysProcessDisabled" spd where "SysSchemaId" = schemaid3)
 
 then 
 insert into "SysProcessDisabled" ("Id","CreatedOn" ,"CreatedById" ,"ModifiedOn" , "ModifiedById","Name","Description", "ProcessListeners", "SysSchemaId")
 values ('b142c3e7-be9f-4521-9df8-a5c4f629e18c','2022-10-10 14:51:24.568','410006E1-CA4E-4502-A9EC-E54D922D2C00',
 '2022-10-10 14:51:24.568','410006E1-CA4E-4502-A9EC-E54D922D2C00', '', '',0, schemaid3);

end if;
end; $DisableBP3HandOffSales$;


--------------------------------------------------------------------------------------------------

--Deactivate Case - Lead case 

do $LeadCaseDeactivate$
declare
   schemaid4 varchar;

   begin

  schemaid4 :=( select "Id"  
   from "SysSchema" ss 
  where "Name"  = 'LeadCase');
 
 if not exists (select 1 from "SysSchemaUserProperty" spd where "SysSchemaId" = schemaid4)
 
 then 
 insert into "SysSchemaUserProperty" ("Id","CreatedOn" ,"CreatedById" ,"ModifiedOn" , "ModifiedById","Name","Value", "SysSchemaId")
 values ('6f3b257a-df24-4ad2-a480-653554bcc137','2022-09-26 09:49:05.0000000','410006E1-CA4E-4502-A9EC-E54D922D2C00',
 '2022-09-26 09:49:05.0000000','410006E1-CA4E-4502-A9EC-E54D922D2C00', 'Enabled', 'False', schemaid4);

end if;

if not exists(select 1 from "SysSchemaUserProperty" spd where "SysSchemaId" = schemaid4 and  "Name"= 'Enabled' and  "Value" = 'False')
then 
update "SysSchemaUserProperty" set "Value" = 'False' where "SysSchemaId" = schemaid4 and  "Name"= 'Enabled';
end if;

end; $LeadCaseDeactivate$;

----------------------------------------------------------------------------------------------