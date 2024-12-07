import React, { Component } from "react";
import "../App.css";

export default class SingleSourcePCBA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayContent: "Click on the menu items to display their content here.",
      selectedRemarks: {}, // Tracks selected radio buttons
      showTasks: false, // Toggles task view
    };
  }

  // Toggle task view
  showTaskView = () => {
    this.setState({ showTasks: true });
  };

  // Handle radio selection
  handleRadioChange = (taskId, value) => {
    this.setState((prevState) => ({
      selectedRemarks: {
        ...prevState.selectedRemarks,
        [taskId]: value,
      },
    }));
  };

  // Combine all tasks into groups with custom headers
  getAllTasks = () => {
    return [
      {
        secondColumnHeading: "Accepting task in Windchill & Checklist Verification",
        tasks: [
          {
            id: 1.1,
            description:
              'Verify whether "Create Intent Change Notice - EPR0XXXXXX, A.1" task is present in My Tasks Open list',
          },
          {
            id: 1.2,
            description:
              'Select "Create Intent Change Notice - EPR0XXXXXX, A.1" and click on Accept icon.',
          },
          {
            id: 1.3,
            description:
              `Click on ZF Electronic Part Request - EPR0XXXXXX, Elec, A,<Description>  and Change Roles-<br/>
              CN Author Validation from GEE Elec ECAD Library Work Assignment Grp  to Assignee name(Creator)<br/>
              CN Author Intent from GEE Elec ECAD Library Work Assignment Grp  to Assignee name(Creator)<br/>
            
              Note: Remove GEE Elec ECAD Library Work Assignment group after adding assignee name. This would ensure that no additional task is retriggered to Work assignment group.`,
          },
          {
            id: 1.4,
            description:
              `Verify if the checklist used is the latest version from the Windchill.<br/>
              Note: Latest revision of checklist is RevH.4`,
          },
        ],
      },

      {
        secondColumnHeading: "EPR Investigation:",
        tasks: [
          {
            id: 2.1,
            description: `Is Business Unit information provided in EPR?<br />

    1. For Div.U requests - UD(GEE)<br />
    2. For Div.L requests - UL<br />
    3. For Div.R requests - RD(OSS)<br />
    4. For XA requests - XA<br />
    5. For EDE requests - EDE<br />
   
    **Note**:<br />
    To identify request is from XA team, Check PR description and requester email ID to confirm if the request is from XA team. Generally, XA team have ‘FRD XA’ in their mail ID.<br />
    If request belongs to RD(OSS) should use PR62831, by now requests are only received from Engineer "Pattanshetti, Shivabasappa", "Bannour, Houda", "Rauch, Lars". Request should be highlighted as YELLOW in work tracker.<br />`,


          },
          {
            id: 2.2,
            description: `Please verify Is EPR requesting for: Single Part or Multiple Part? 
<br />
Note: If EPR is requesting for Multiple part then verify Multiple electrical parts is pulled by CE team or not. (Verify under affected objects`,
          },
          {
            id: 2.3,
            description: `Is Design Tool Information - Dx-PADs or Dx-Expedition provided?<br />

If request is for Dx-PADS other than assembly micro, confirm whether request is for replacement ?<br />
If not then Librarian has to send mail to requester about not creating new Electrical parts for Dx-PADS. Requester has to use Dx-Expedition CAD only and proceed for cancelling the EPR.`,
          },
          {
            id: 2.4,
            description: "Is the part Intended For Full Automotive Production Use?",
          },

          {
            id: 2.5,
            description: `Is Manufacturing Plant Name and Customer name provided?<br />
For McDaniel Dale Request, Manufacturer Plant should be All Plants`,
          },
          {
            id: 2.6,
            description: `Is Design centre provided in description/ comment?<br />
For McDaniel Dale Request, Design Center should be All Design Center`,
          },
          {
            id: 2.7,
            description: `Is Valid project clarity ID (PR number)  mentioned under “Project Name”/ “Description”/ “Related Part”?<br />

Note: <br />
1. If PR number is present in latest project list but not available in Windchill, then mention the PR number under Project Name in the EPR form. <br />
If PR number is not present in latest project list, then ask the requester for alternative PR number.<br />
2. For EMS2.3/EMS2.4 Obsolescence updates use PR47953 and for production updates use PR36873.<br />`,
          },
          {
            id: 2.8,
            description: `Is field "Will this Part be used in Top level or PCBA Level?" checked from EPR form?`,
          },
          {
            id: 2.9,
            description:
              `Is the request for special package or miniature package or smaller package component?<br />
         
            Note:<br />
            • Miniature package 0201/0525 is approved by CE with some restrictions and with confirmation from GMT.<br />
            Component restriction- “Part not allowed for Production”<br />
            -Restricted state<br />
            -WD Lifecycle: Design Intent<br />
            • Other than 0201/0525 package, send query email to GMT.<br />
            If GMT approves, proceed with the request. Else, with requester's consent proceed with "Cancel Windchill Related Activities" steps.`,
          },
          {
            id: "2.10",
            description: `"Is the request for a component with ""Conductive Glue Method"" mounting technology?<br />
Generally such parts are Restricted with comment ""For mounting with conductive glue, extra process step, short shelf life - restricted by GMT.”<br />
Before taking any action, send a query email to GMT.<br />

Note: In future Librarians may add Ad Hoc activity for GMT Review and Approval and Librarian verification."`,
          },

          {
            id: 2.11,
            description: "Verify any specific requirement given in EPR form under comments section. ",
          },


        ],
      },


      {
        secondColumnHeading: "Create Intent CN",
        tasks: [
          {
            id: 3.1,
            description:
              `Is Intent CN created under EPR<br />
              Action > New > New Change Notice`,
          },
          {
            id: 3.2,
            description:
              "Is Type selected as per Target Release State",
          },
          {
            id: 3.3,
            description:
              "Intent CN is created by GEE Elec ECAD Library Work Assignment Grp (Reshma and Rupali) and assigned to respective creator",
          },

        ],
      },


      {
        secondColumnHeading: "Complete Windchill related activities for Create Intent Change Notice task",
        tasks: [
          {
            id: "3.4.1",
            description:
              `Open ZF Electronic Part Request Workflow_EPR0XXXXXX, Elec, A-Create Intent Change Notice - EPR0XXXXXX, A.1<br />
              Note: Read special instruction mentioned and complete the required action before completing task (If any)`,
          },
          {
            id: "3.4.2",
            description:
              `Mention comments "CNXXXXXX created for EPR0XXXXXX"  and click on Complete task . `,
          },


        ],
      },


      {
        secondColumnHeading: "",
        tasks: [
          {
            id: "4.1",
            description:
              `Verify whether "Submit Change Notice - CN0XXXXXX, A.1" task is present in My Tasks Open list`,
          },
          {
            id: "4.2",
            description:
              `Click on " Submit Change Notice - CN0XXXXXX, A.1" and then go to "Set Up Participants" task `,
          },

          {
            id: "4.3",
            description:
              `Add CA3 role as per following names -<br />
              1. Hegde, Suchitra<br />
              2. Khalili-Panah, Ali<br />
             
              Add CA1 and CN Author Validation<br />
              Assignee name(Creator) <br />
             
              Verify CN Author Intent and Submitter <br />
              Assignee name(Creator)<br />
             
              Note: Add/Replace if the above three names are missing`,
          },
          {
            id: "4.4",
            description:
              `Is Implementation plan added as per document A0057E9453 `,
          },
          {
            id: "4.5",
            description:
              `Go to "Details" tab and add comment "<CN0XXXXXX> created for <EPR0XXXXXX>"`,
          },
          {
            id: "4.6",
            description:
              ` Select Routing option as "Submit_ChangeNotice" and then click on Complete task`,
          },
          {
            id: "4.7",
            description:
              `Verify whether new task "Complete Change Notice Task - CA000XXXXXX, A.1" is added to My tasks table.`,
          },
        ],
      },



      {
        secondColumnHeading: "Implementation Plan task",
        tasks: [
          {
            id: "5.1.1",
            description:
              `Verify if Assignee is correctly added
              Assignee: Replace "GEE Elec ECAD Library Work Assignment Grp" with Creator name`,
          },
          {
            id: "5.1.2",
            description:
              `Is Task Description added "Electrical Part Classification Activity for AxxxAxxx" `,
          },

          {
            id: "5.1.3",
            description:
              "Verify if Electrical Part, Manufacturer Part and related document as affected objects to this task.",
          },
          {
            id: "5.1.4",
            description:
              "Verify if No object is added to Resultant objects to this task",
          }, {
            id: "5.1.5",
            description:
              `Is CAD identification completed as per below checklist ?<br />
              - Refer A0026T1197_ECAD Librarian Checklist for PDB_CAD_3D_PFA`,
          },
          {
            id: "5.1.6",
            description:
              `Is 3D model identification done from M3DL/Part Quest/Supplier ?<br />
              - Refer A0055U2065_3D Model Help Document `,
          },
        ],
      },


      {
        secondColumnHeading: "Re-classification of Electrical Part",
        tasks: [
          {
            id: "5.2.6",
            description:
              `General instructions:<br />
              • All the fields should be filled with proper information.<br />
              • The information should be entered accurately and should match Datasheet .<br />
              • Verify is part created by CE is Electrical part.`,
          },
          {
            id: "5.2.2",
            description:
              ` Move electrical part to (Elec_Catalog_Library, Elec) container.<br />
              Click on Action > Move > Select New Location >Elec_Catalog_Library, Elec). Click on Folders > Parts > click OK`,
          },


        ],
      },


      {
        secondColumnHeading: "",
        tasks: [
          {
            id: "5.2.3.1",
            description:
              `Click on Action > Check out and Edit`,
          },
          {
            id: "5.2.3.1",
            description:
              ` Verify Library (Elec_Catalog_Library, Elec).`,
          },

          {
            id: "5.2.3.3",
            description:
              `Verify Type as Electrical Part`,
          },
          {
            id: "5.2.3.4",
            description:
              `Set Organization ID as Elec<br />
              Set Configurable Module as No<br />
              Set Create as End Item as No `,
          },

        ],
      },



      {
        secondColumnHeading: "Part Attributes",
        tasks: [
          {
            id: "5.2.4.1",
            description:
              `Verify whether Number is set as (Generated)<br />
              Note: Number is auto generated.`,
          },
          {
            id: "5.2.4.2",
            description:
              ` Do NOT enter anything in the Name field. This will be auto generated by combining selection made in the "Auto Name From" and attribute definition in the "Name Extension" fields under "Set Classification Attributes" window.`,
          },

          {
            id: "5.2.4.3",
            description:
              `Set Revision as A`,
          },
          {
            id: "5.2.4.4",
            description:
              `Set Assembly Mode as "Component" for Individual Components, Blank Micros`,
          },
          {
            id: "5.2.4.5",
            description:
              ` Set Source as per the request:<br />
            
              Either of the below selections to be used:<br />
              Buy: For Multiple source part (Multiple MPNs from different manufacturers)<br />
              Buy-Single Source: For Single source part (Multiple MPNs from same manufacturers Eg. 34184089A)<br />
           
              Below selections are NOT used:<br />
              Not Set: Sourcing not set<br />
              Make: Internally assembled at ZF`,
          },


          {
            id: "5.2.4.6",
            description:
              `Set View as Design<br />
              Note :- If View is Manufacturing , then that should be changed to Design.<br />
              Open Electrical part, Go to Action - Reassign View and change to Design from Drop down<br />
              
              Set Default Trace Code as Untraced<br />
              Set Default Unit as each<br />
              Set Gathering Part as No<br />
              Verify whether Life Cycle Template is set as (Generated)<br />
              Verify whether Team Template is set as (Generated)<br />
              Set Location as Auto select Folder. Verify that location is /Elec_Catalog_Library_Parts`,
          },
          {
            id: "5.2.4.7",
            description:
              ` Select Classification information<br />
           
              Note: Refer latest A0009E3791 GEE Classification Document to derive a Part name and the field length. WINDCHILL GEE PART CLASSIFICATION sheet is updated for few part classifications and attributes.<br />
           
              • Varistors should be classified as "Transient Protectors/Varistors", even though they may show characteristics like diode <br />
              • Solder Spheres need to be classified under Connectors.<br />
              • In case if a part cannot be completed with the provided information (this scenario may occur when datasheet is not available and all/some attributes are missing), the Classification should be selected as “Unclassified”. Part can be released with lower maturity level. (When the missing information will be available, CR-CN would be needed to change the classification to complete the request.)`,
          },
          {
            id: "5.2.4.8",
            description:
              `Name Extension field will be auto populated based on the selection made as per GEE Part Classification under the Set Classification Attributes dialogue box.`,
          },
          {
            id: "5.2.4.9",
            description:
              `Keep "Additional Classification" field blank  `,
          },
          {
            id: "5.2.4.1.0",
            description:
              `Part Description field<br />
              Full part name should be added in Part Description field for part in Windchill since this field does not have any character limitation.<br />
           
              If the Part Name field is not blank, then Part Name field value from EDM is mapped to Part Description field in UKPDM and Part description field value from EDM will not passed to UKPDM. <br />
              Windchill Part Name >> EDM Part Name >> UKPDM Part Description<br />
              Windchill Part Name >> Part Name under Component Properties in Schematic`,
          },
          {
            id: "5.2.4.1.1",
            description:
              `Design weight is applicable only for below parts (Design Weight will be provided by CE at the time of CE Approval)<br />
              - New parts created and released at maturities Design Intent and above will require the Design Weight attribute to be filled out<br />
              - New revisions of existing parts released at maturities Design Intent and above will require the Design Weight attribute to be filled out<br />
              - Part, Semi-finished Part, External Reference and Aftermarket Part types will have the Design Weight attribute enforced<br />
           
              - "Request for Design Weight” task will not be sent to CE team for parts created under existing packages. In such cases, Librarians will use the Design weight (Estimated weight) value as per the parts under same package.<br />
              - "Request for Design Weight” task will be sent to CE team only for new packages or for parts under existing packages where Design weight information is missing in existing parts.<br />
            
              Design Weight to be entered during Material definition by Engineering and can be one of the following:<br />
              - Estimated (based on similar designs)<br />
              - Based on 3D Model<br />
              - Calculated by Engineering `,
          },

        ],
      },


      {
        secondColumnHeading: "Set Classification Attributes (This is same as Component Attributes in EDM)",
        tasks: [
          {
            id: "5.2.5.1",
            description:
              "Select Multilingual AutoName From as Long Name.",
          },
          {
            id: "5.2.5.2",
            description:
              `Select Multilingual Long Name by selecting search icon and then Long Name will be auto selected, then press ok<br />
              You would see the ID number is displaced in the value box `,
          },
          {
            id: "5.2.5.3",
            description:
              `Enter all Classification Attributes based on the part classification group. All fields are mandatory. Ensure all the fields are filled as per the datasheet.<br />
           
              Note:<br />
              • Do not consider negative(-) sign in value of part (e.g - For PNP Transistor If BVCEO is given as -60V consider 60V)<br />
              • For Relays, Add "No. of Poles" properly. Do not confuse pole number with number of pins.<br />
              • For “CURR-COMP-CHK, COM-MODE”, if the voltage value in datasheet is given in AC and DC voltage both then consider DC voltage value.<br />
              • For Memory size conversion, please see attached example.<br />
              • Always use ambient condition for power rating, not the one based upon terminal temperature.<br />
              • Use Isat at 30% as the rated current value for Inductors.<br />
              • For IC Sensor Part, Accuracy can be calculated by Acceration Rate or Angular Rate value. Convert the value to PPM<br />
              • For zero ohm jumper chip resistors if maximum Resistance value mentioned in datasheet then we should be using that Maximum Resistance value not zero ohm. Confirm with CE also.<br />
              e.g. - A010N370`,
          },

          {
            id: "5.2.5.4",
            description:
              `In general, all the tolerance values should be rounded up to 3 decimal places.(Use higher value in case of drop down menu does not have desired value)<br />
              <br />
              Note: <br />
              • Tolerance in the Resonators > Crystals/Oscillator should be represented in ppm format. If it is in percentage format, it should be converted to ppm.<br />
              Formula: x(ppm) = 10000 · x(%)<br />
                  Tolerance in the Resonators > Ceramic should be represented in %<br />
              • In case of Capacitor, if tolerance is given in terms of capacitance value then it needs to be converted  to percentage. E.g. if tolerance is given as 0.25pF and capacitance is 4pF, then convert tolerance to percentile as below:<br />
                   %= (tolerance X 100) / (Capacitance)<br />
                      = (0.25 X 100) / (4)<br />
                      = 6.25%<br />
              • Since we don’t have 6.25% is tolerance drop down menu, this value should be rounded up to 7% instead of making it 6%. `,
          },

          {
            id: "5.2.5.5",
            description:
              ` Enter Name Extension as per GEE Part Classification.<br />
             
              Note: <br />
              •  Ensure that Long Name + Name Extension which forms the Part Name does not cross 40 characters.<br />
              •  Name Extension = Customer + Platform + Requester Input (if any)`,
          },
          {
            id: "5.2.5.6",
            description:
              "Verifiy Design Weight Mandatory is by default yes",
          },
          {
            id: "5.2.5.7",
            description:
              "Select Supplemental Requirement as No",
          },
          {
            id: "5.2.5.8",
            description:
              "Keep Diverse Partner Part Number as blank",
          },
          {
            id: "5.2.5.9",
            description:
              ` Select Manufacturer Source Type as per below<br />
              For Single source part: Single Source<br />
              For Multi-source part: Equivalent or Alternative (depends on Part)<br />
              <br />
              Alternative Part: These parts will have Alternative Source Attribute Sheet. E.g. Resistors (Package-3216, 3225)<br />
              Equivalent Part: These parts will have Envelope Specification Source Attribute Sheet. E.g. Resistors (Package-1005, 1608, 1632, 2012)`,
          },
          {
            id: "5.2.5.10",
            description:
              `Select Multilingual Long Name by selecting search icon and then Long Name will be auto selected, then press ok<br />
              You would see the ID number is displaced in the value box`,
          },
          {
            id: "5.2.5.11",
            description:
              ` Is the Part name <= 40 characters? <br />
           
              Note: <br />
              • Refer latest GEE Classification Document A0009E3791 to derive a Part name and the field length.<br />
              • In in case if part name exceeds 40 characters as per GEE Part Classification syntax : consult Suchitra for suggestions to limit the Name Extension length. This may lead to update to GEE Part Classification syntax.`,
          },

          {
            id: "5.2.5.12",
            description:
              "Click on Save and check in.",
          },

        ],
      },


      {
        secondColumnHeading: `Add Described By documents in Related Objects of Electrical Part<br/>
        Standard Notes `,
        tasks: [
          {
            id: "5.3.2",
            description:
              `Required Published Standard Notes should be identified and selected from Standard Notes Structure Document A0009K3141 in Windchill.<br/>
             
              TRANSIENT PROTECTOR, TVS: Add Diode Standard note A0009F4023 for “TRANSIENT PROTECTOR, TVS" instead of A0009F4046.<br/>
              Resistor Dual Source: Add Standard note A0024Y1689<br/>
              Dual Source capacitors: Add Standard note A0024Y1690 for MLCC <br/>
             
              Note: <br/>
              1. For Connector Parts, If engineer didn’t provide “Supplier Product Spec” in the EPR, ask CE to provide it to us. Resent the CE Approval task if CE didnot provide in attachment section of the CA task while approving the CA task.<br/>
             
              2. For Single Source TDK parts, do not attach any standard notes and spec sheet in Related Objects of Electrical Part<br/>
              
              3. Please use ZFN spec number instead of windchill document numbers for following spec sheets.<br/>
              Document ZFN 1160 instead of A0051U0712 and A0005U8740<br/>
              Document ZFN 9003 instead of A0026C2429<br/>
             
              In the absence of the required Standard Notes document, contact Suchitra. (Sometimes Librarians may need to create Standard Notes as Internal documents under Elec_Common_Library)`,
          },
          {
            id: "5.3.3",
            description:
              `Related specification sheet numbers should be identified from the respective Standard Notes document.<br/>
              Note: 
              1) Check all described by document current state. If it is in History, then remove the history document and associate the correct published document.<br/>
              2) Do not add industry standard spec sheets J-STD-033 and EIA625 to the related object of electrical parts.<br/>
              3) Do not add Reference A0026B5160; DCF 17-02 Regulation of Special Characteristics to the related objects of electrical parts. `,
          },
          {
            id: "5.3.4",
            description:
              "Go to Related Objects tab. Add existing Standard Notes Document AxxxxAxxxx and related spec sheets as Described By Documents.",
          },


        ],
      },



      {
        secondColumnHeading: "ZF Manufacturer Part",
        tasks: [
          {
            id: "5.4.1",
            description:
              `Used existing ZF Manufacturer part number?<br />
              If Yes, Skip creation steps from 7.2 to 7.14<br />
              If No, follow below creation steps.<br />
              <br />
              Note:<br />
              If using existing Manufacturer part number then check whether that is as per latest guideline and as per decoding information from datasheet or not. <br />
              If not, create new ZF Manufacturer Part number`,
          },
          {
            id: "5.4.2",
            description:
              "Go to the required Library container (Elec_Catalog_Library, Elec). Click on Folders → Manufacturer Parts.",
          },

          {
            id: "5.4.3",
            description:
              ` Click on New part icon (under Folder Contents)<br />
              New Part dialog box will open`,
          },
          {
            id: "5.4.4",
            description:
              "Verify the Library (Elec_Catalog_Library, Elec)",
          },
          {
            id: "5.4.5",
            description:
              "Select Type as Manufacturer Part",
          },
          {
            id: "5.4.6",
            description:
              `1. Search for Manufacturer ID. If found in the list, select the Manufacturer ID, Else follow next checkpoint<br />
              <br />
              Note:<br />
              - Manufacturer "Freescale" has been acquired by “NXP”. "NXP" has a new name "Nexperia". If the datasheet is from "Nexperia", select Manufacturer ID as "Nexperia". Else if the datasheet is from  "Freescale" or "NXP" select Manufacturer ID as "NXP.<br />
              - Manufacturer "Fairchild" has been acquired by "On Semiconductor”. Hence, use “On Semiconductor” as manufacturer even though the datasheet still shows "Fairchild" logo in the datasheet.<br />
              - Manufacturer "EPCOS" merged with “TDK”. Use “TDK” as manufacturer even though the datasheet still shows "EPCOS" logo in the datasheet.<br />
              Use Manufacturer ID as Chemi-con for "Nippon Chemi-Con" (Refer CN0046734)<br />
              - Cypress has been acquired by Infineon. But still for Cypress select Manufacturer ID as "Cypress" only , even if on Cover page Infineon mentioned, till further confirmation from Cypress. `,
          },
          {
            id: "5.4.7",
            description:
              `If Manufacturer ID not found then to create new Manufacturer ID by raise ticket with ZF IT<br />
              Ticket should mention "Request to create new Organization ID: <Manufacturer Name><br />
              Example: Request to create new Organization ID: TKD <br />
              Note: Once ticket is created, sent email to Vijay `,
          },

          {
            id: "5.4.8",
            description:
              "Configurable Module as No? (Default Value as No)",
          },
          {
            id: "5.4.9",
            description:
              "Set Create as End item as No",
          },
          {
            id: "5.4.10",
            description:
              "Enter Manufacturer Part number in the Number field (Note: Ensure that Number is NOT auto generated, it should be manual entry)",
          },
          {
            id: "5.4.11",
            description:
              `Packaging Character in ordercode - <br />
              Windchill PLM is enhanced to support multiple MGF part numbers(order codes) association to ZF part number even though ZF part is a single source.<br />
              No more asterisk requirement in MFG part number, all approved Tape and reel options need to be added as MFG part number. (Guideline effective from 13Mar2024)<br />
              <br />
              Hence, For any new ZF part created by librarians, we should create/use MFG part number with approved tape and reel option provided by CE in CE Pre-approval.  `,
          }, {
            id: "5.4.12",
            description:
              `Verify if Packaging option in the order code follow one of the below approaches-<br />
              1. Requested Order code with Tape & Reel packaging option – Process the request<br />
              OR<br />
              2. Requested Order code with Tray option but Tape & Reel option available in datasheet – Inform the requester “Tray option is not accepted by Manufacturing plant. Select Tape & Reel option from datasheet for new part”<br />
              OR<br />
              3. Requested Order code with Tray option but Tape & Reel option not available in datasheet – Inform the requester “Tray option is not accepted by Manufacturing plant. Contact supplier to check for availability of Tape & Reel option”<br />
              If supplier has both Tray and Tape & Reel packaging options, only Tape & Reel packaging should be used. `,
          }, {
            id: "5.4.13",
            description:
              `For Vendor part number format for KOA, Yageo, Murata, Kemet, TDK, Samsung, Refer "Multi-Source Format Requirements_v2.5.xlsx"`,
          },


          {
            id: "5.4.14",
            description:
              `For SAK and SAL Series Order code refer A0028P7586 : <br />
              Note: Add the release level to the Manufacturer Order Code except for QS. Below are the listed Release levels with example of Order code<br />
                            Refer decoding information for order codes. From below example "AA" represents step variants where AA (first character = silicon revision, second character = metal mask revision)<br />
                  ▪ Infineon has four releases during development of a microcontroller:        <br />
                    - EES(RT)       Early Engineering Sample (tested at Room Temperature) ( e.g.: SAK-TC375TP-96F300W AA EES(RT)<br />
                    - EES(3T)       Early Engineering Sample (tested at 3 Temperatures) ( e.g.:  SAK-TC375TP-96F300W AA EES(3T)<br />
                    - ES                 Engineering Sample ( e.g.:  SAK-TC375TP-96F300W AA ES )<br />
                    - QS                Qualified Sample (the production version) ( e.g.:  SAK-TC375TP-96F300W AA ) `,
          },

          {
            id: "5.4.15",
            description:
              `For NDK crystals :There are two number available in datasheet , Type and NDK Spec No. use NDK Spec No as order code.<br />
              <br />
              Below parts are exceptions:<br />
              ● DO NOT USE internal order codes (e.g.: SPxxx, etc...) even if new Electrical Part is created based on reference part. <br />
              We need to enter the correct order code as per the datasheet. Note: If the Requester still insists for internal code, contact CE. `,
          },

          {
            id: "5.4.16",
            description:
              ` Enter the Name for the part as below-<br />
              For Single Source - Name should be same as Electrical part name.<br />
              For Multiple Source - Name should be as individual manufacturer part attributes, keep the same syntax as electrical part.`,
          },

          {
            id: "5.4.17",
            description:
              ` Keep Default value for below listed attributes:<br />
              - Revision as A<br />
              - Assembly Mode as Component<br />
              - Source is set as Buy<br />
              - View as Design<br />
              - Default Trace Code as Untraced<br />
              - Default Unit as each<br />
              -Gathering Part as No<br />
              - Lifecycle Template as (Generated)`,
          },

          {
            id: "5.4.18",
            description:
              "Click on Finish. Verify whether New Manufacturer Part has been created",
          },




        ],
      },



      {
        secondColumnHeading: "Create New Datasheet Document",
        tasks: [
          {
            id: "5.5.1",
            description:
              `Is latest datasheet available in Windchill?<br /> 
              If yes, use existing datasheet. <br />
              Else create new.`,
          },
          {
            id: "5.5.2",
            description:
              "Go to the required Library container (Elec_Catalog_Library, Elec). Click on Folders → Documents.",
          },

          {
            id: "5.5.3",
            description:
              `Click on New Document icon (under Folder Contents).<br />
              New Document dialog box will open`,
          },
          {
            id: "5.5.4",
            description:
              "Verify Library (Elec_Catalog_Library, Elec).",
          },
          {
            id: "5.5.5",
            description:
              "Select Type as External Document",
          },
          {
            id: "5.5.6",
            description:
              "Set Organization ID as Elec",
          },
          {
            id: "5.5.7",
            description:
              "DO NOT Select anything under Template",
          },
          {
            id: "5.5.8",
            description:
              "Set Primary Content Source as Local File and Enable “Externally Distributable” flag only for primary content not for attachment.",
          },
          {
            id: "5.5.9",
            description:
              `Under File Name, click on Browse and select the Datasheet provided with the EPR to be uploaded. Ensure that the file name is as per Datasheet document file naming convention.`,
          },

        ],
      },



      {
        secondColumnHeading: "",
        tasks: [
          {
            id: "5.5.10.1",
            description:
              "Select Source Type as Supplier",
          },
          {
            id: "5.5.10.2",
            description:
              "Let the Source name be default No Selectable Values",
          },

          {
            id: "5.5.10.3",
            description:
              "Select Primary Classification as Performance Specification",
          },
          {
            id: "5.5.10.4",
            description:
              "Mention Supplier Name",
          },

        ],
      },



      {
        secondColumnHeading: "Attributes",
        tasks: [
          {
            id: "5.5.11.1",
            description:
              `Verify whether Number is set as (Generated)<br />
              Note: Number is autogenerated.`,
          },
          {
            id: "5.5.11.2",
            description:
              "Enter Name for the Document as per document naming convention",
          },
          {
            id: "5.5.11.3",
            description:
              ` Leave Description blank<br />
              Set Location as Auto select Folder (/Elec_Catalog_Library/Documents)<br />
              Verify whether Life Cycle Template is set as (Generated)<br />
              Verify whether Team Template is set as (Generated)`,
          },


        ],
      },



      {
        secondColumnHeading: "External Document Information",
        tasks: [
          {
            id: "5.5.12.1",
            description:
              `Leave External Number Field blank
              Leave External Release Field blank
              Leave External Revision Field blank`,
          },

        ],
      },


      {
        secondColumnHeading: "Business",
        tasks: [
          {
            id: "5.5.13.1",
            description:
              "Select Access Control as ZF Confidential",
          },
          {
            id: "5.5.13.2",
            description:
              "Leave Remarks field blank",
          },
          {
            id: "5.5.13.3",
            description:
              "Uncheck the checkbox Keep checked out after check in and click on Finish",
          },
          {
            id: "5.5.13.4",
            description:
              "Click on Finish to complete the action",
          },
          {
            id: "5.5.13.5",
            description:
              "Verify whether New document AxxxxAxxxx is created",
          },

        ],
      },



      {
        secondColumnHeading: "Add Described By documents in Documents of Manufacturer Part",
        tasks: [
          {
            id: "5.5.14.1",
            description:
              "Is datasheet added to Manufacturer part?",
          },

        ],
      },



      {
        secondColumnHeading: "ZF AML of Electrical Part",
        tasks: [
          {
            id: "5.6.1",
            description:
              "Go to ZF AML tab. Click on Add existing manufacturer part to this AML and add the ZF Manufacturer Part by searching the Manufacturer Part number.",
          },
          {
            id: "5.6.2",
            description:
              `Select Manufacturer Part in Add existing manufacturer part to this AML dialog box. <br />
              Manufacturing Sourcing Status: Not Set (default)<br />
              Exception: For KOA, Yageo, Walsin Dual source parts - Set Souring status as KOA - Approved, Yageo- Preferred and Walsin/Kamaya- Approved<br />
              Click on Next. Check In Electrical Part`,
          },

        ],
      },


      {
        secondColumnHeading: "Subscriptions",
        tasks: [
          {
            id: "5.7.1",
            description:
              "Is Subscription done for Plant, Purchasing, SDE, Requester and Ali?",
          },
          {
            id: "5.7.1.1",
            description:
              "Go to CN home page, Click on Actions > Subscribe",
          },
          {
            id: "5.7.1.2",
            description:
              `Identify Events:<br />
              Subscription Name:  Intent CN for CR0XXXXXX (Auto-populated)<br />
              Events: Life Cycle State > Resolved<br />
              Click on Next`,
          },
          {
            id: "5.7.1.3",
            description:
              `Select Subscribers:<br />
              To: Remove Librarian user ID. Mention the below user ids. Select Find to find the required user names<br />
              <Plant Responsible Name User ID>  <br />
              <Purchasing Contact Name User ID><br />
              <SDE Contact Name User ID> <br />
              < Requester Name User ID><br />
              < Ali User ID><br />
             
              From: System<br />
              Deliver: Immediately<br />
              Click Next`,
          },
          {
            id: "5.7.1.4",
            description:
              `Define Subject and Expiration:<br />
              Subject: AXXXXXXX, Part release notification<br /> 
              Message: This is to notify you that AXXXXXXX, <Long Name>, has been <Target release state> through CN0XXXXXX.<br />
            
              Expiration: Blank<br />
              Click on Finish`,
          },

        ],
      },


      {
        secondColumnHeading: "Is Subscription done for checking all States (Electrical part, Manufacturer part, Datasheet Doc, Electrical part State in EDM) after CN is resolved?",
        tasks: [
          {
            id: "5.7.2.1",
            description:
              "Go to CN home page, Click on Actions > Subscribe",
          },
          {
            id: "5.7.2.2",
            description:
              `Identify Events:<br />
              Subscription Name:  Intent CN for CR0XXXXXX (Auto-populated)<br />
              Events: Life Cycle State > Resolved<br />
              Click on Next`,
          },
          {
            id: "5.7.2.3",
            description:
              `Select Subscribers:<br />
              To: <Creator User ID>  <br />
             
              From: System<br />
              Deliver: Immediately<br />
              Click Next`,
          },
          {
            id: "5.7.2.4",
            description:
              `Define Subject and Expiration:<br />
              Subject: Verify CN0XXXXXX Resolve Notification<br />
              Message: CN0XXXXXX, Version: X Closed, Verify State Electrical part, Manufacturer part, all documents added in Related objects of Electrical part and Manufacturer part in Windchill and Electrical part State in EDM<br />
            
              Expiration: Blank<br />
              Click on Finish`,
          },

        ],
      },



      {
        secondColumnHeading: "Complete EDM Cockpit related updates for Part",
        tasks: [
          {
            id: "5.8.1",
            description:
              "Login to Production EDM",
          },
          {
            id: "5.8.2",
            description:
              "Verify whether the part is created in EDM based on selected classification in Windchill",
          },
          {
            id: "5.8.3",
            description:
              "Verify the component attribute values whether it is same as electrical part in Windchill",
          },
          {
            id: "5.8.4",
            description:
              `Verify the following properties in EDM are set same as electrical part in Windchill<br />
              • Part Number<br />
              • Part Number Type<br />
              • Assembly Mode<br />
              • Part Release State<br />
             • Source System<br />
              • DxDb_libname and Dxdb_Tablename (Only verify no need to update manually)<br />
              • Short Name<br />
              • Long Name<br />
              • Part Name<br />
              • Description<br />
              • Creator<br />
              • Date Raised<br />
              • Windchill Modified By<br />
              • Windchill Last Modified On<br />
              • Manufacturer<br />
              • Order Code<br />
              • Sourcing Status<br />
              • BLR Risk Value (Applicable only for Critical component) - Keep Blank while processing the EPR (Add % after the value)<br />
              • BLR Risk Status (Applicable only for Critical component) - Keep Blank while processing the EPR`,
          },
          {
            id: "5.8.5",
            description:
              "Is the Part Number and Internal Part Number same in EDM?",
          },
          {
            id: "5.8.6",
            description:
              `For XA and UL request only, Is Sync To selected as HMI<br />
              This will sync the part to HMI system and sync back the HMI Part number to EDM. (Backend activity, every 2 Hour)`,
          },
          {
            id: "5.8.7",
            description:
              `For DIV R request only, Is Used in Div. R selected as " Yes"<br />
              Note: This field is set as No by Default. If Request is not for Div R, do nothing.`,
          },
          {
            id: "5.8.8",
            description:
              `ECAD Librarian to complete remaining applicable attributes in EDM for the Electrical part<br />
             
              General instruction:<br />
              All the fields should be filled as much as possible<br />
              There should be no special characters in Comments field. This includes / < % > $ #, etc…<br />
              Do not use double quotes (“) or single quotes (‘) in this field. It causes issues with the CAD system.<br />
              The information should be entered accurately and should match Datasheet and/or legacy part.`,
          },


        ],
      },



      {
        secondColumnHeading: "General, Manufacturer Details and Component Attributes",
        tasks: [
          {
            id: "5.8.9.1",
            description:
              "Verify all the fields in General, Manufacturer Details and Component Attributes. Information will be carried forwarded from Windchill.",
          },
          {
            id: "5.8.9.2",
            description:
              `Mention <CN number> in the Comments field<br />
              Note: Character limit = 255 characters`,
          },
          {
            id: "5.8.9.3",
            description:
              `Is datasheet document no. added in EDM in Manufacture details tab?<br />
              Use “;” if we have multiple datasheet documents.<br />
              Note: Datasheet Document should be added in Same sequence as Manufacturer<br />
              
              Example: <br />
              Manufacturer : YAGEO;YAGEO;YAGEO; KOA; KAMYA<br />
              Datasheet Document: A0009N0586;A0009N0586;A0009N0586;A0054E0606;A0052L6133`,
          },
          {
            id: "5.8.9.4",
            description:
              `Is Datasheet Link for Schematic added in Manufacture details tab?<br />
              For Single Source parts - Datasheet Link for Schematic should be Datasheet Document Number.<br />
              Note: Only one document number should be added here as it generate URL link from windchill. In case of Multiple packaging option add any one document number.<br />
             
              For Multi Source parts - Datasheet Link for Schematic should be Attribute sheet Document Number.`,
          },

        ],
      },


      {
        secondColumnHeading: "Component Properties",
        tasks: [
          {
            id: "5.8.10.1",
            description:
              `Enter as much information as possible from the datasheet in the blank tabs.<br />
              Add No_of_Pins, Underside space, Operating and Non operating temperature and Attach Method`,
          },
          {
            id: "5.8.10.2",
            description:
              `Add "Package" as per document A0057A7949_Package_Name_Syntax<br />
             
              Note:<br />
              Package syntax applicable for all below scenario’s:<br />
              1) Any new EPR should follow the syntax as per sheet.<br />
              2) Update package name in part level in EDM and for all attached cells while working on PR. <br />
              3) Update package name in windchill if property exist while working on CN.<br />
              4) Contact Ali for any admin actions`,
          },
          {
            id: "5.8.10.3",
            description:
              `"CLABEL" field is a manual entry. To achieve consistency in data, follow the same as UK PDM. Refer A0028M0922.<br />
              Unit should not be added except for Inductor for "CLABEL" field`,
          },
          {
            id: "5.8.10.4",
            description:
              `Ambient temperature to be mentioned as operating environment temperature in case where both Junction and Ambient temperature are given.<br />
             
              If datasheet mentions non-opt envy (storage temp) then information is filled based on datasheet.<br />
              If non-operating Ent is not found in datasheet, leave the field blank in EDM.<br />
              This is applicable to existing & new series both.`,
          },
          {
            id: "5.8.10.5",
            description:
              `The HEIGHT of the component should be based on the maximum height mentioned in the datasheet. If Max height is not available, it should be calculated based on the Nominal Height + Tolerance. (In the absence of tolerance, general tolerance needs to be added.)<br />
             
              Height Min value of the component should be based on minimum height mentioned in the datasheet. If Min height is not available, refer A0028U3927_Cell Design Rule Document - BU UD > General Guideline > Minimum Height Consideration<br />
             
              Note: Height Min and HEIGHT value should not be blank.`,
          },

        ],
      },



      {
        secondColumnHeading: "Lead Free Termination:  ",
        tasks: [
          {
            id: "5.8.11.1",
            description:
              `Only MSL Rating, REFLOWTEMPPEAK and GEE Auto Grade information should be mentioned. Rest all fields should be blank.<br />
              This is applicable even if the Electrical Part is created based on legacy part?<br />
             
              Note:<br />
              - For Lead Free Termination tab, CE is responsible. Check for  MSL Rating, REFLOWTEMPPEAK and GEE Auto Grade information provided by CE or not after CE Approval. If not then mail need to send for pending information.`,
          },


        ],
      },



      {
        secondColumnHeading: "Component Restrictions:  ",
        tasks: [
          {
            id: "5.8.12.1",
            description:
              `Electrical Part restrictions would be based on CE restrictions provided while CE reviews the part<br />
              Same Restriction should be applied to all affected parts associated to MFR part if it is.`,
          },
          {
            id: "5.8.12.2",
            description:
              `Are all the EDM property fields checked to ensure absence of space?<br />
              e.g. Part Number, Internal Part Number, Component Comment`,
          },


        ],
      },



      {
        secondColumnHeading: "Connected Parts:  ",
        tasks: [
          {
            id: "5.8.13.1",
            description:
              "Librarians would be responsible to link new electrical parts to existing legacy parts if applicable.",
          },
          {
            id: "5.8.13.2",
            description:
              `• New Electrical parts should be linked to only applicable legacy parts from the same Vendor. Dual source parts may have multiple legacy parts linked that are for different Vendors/manufacturers.<br />
              • Do not link the "Withdrawn" legacy parts to the GPN/new electrical parts.  <br />
              • Do not link "To be Obsolete" (Pending obsolete) legacy parts to the GPN/new electrical parts.<br />
              • Two Dual Source GPNs can be linked (DS to DS) Refer "Linking Document" `,
          },
          {
            id: "5.8.13.3",
            description:
              "Ensure that the new electrical part and the linked legacy parts are in the same Node/Leaf Node.",
          },
        ],
      },



      {
        secondColumnHeading: "Component Engineer Review and Approval ",
        tasks: [
          {
            id: "6.1",
            description:
              `Verify if Assignee and Reviewer Name are correctly added<br />
              Assignee: Creator (Librarian)<br />
              Reviewer: CE based on commodity`,
          },
          {
            id: "6.2",
            description:
              `Task Description: Mention details in Task Description as needed-<br />
              • Basic CE approval - Request CE approval for AxxxAxxx<br />
              • Parts without design weight information - Request CE approval, Design Weight for AxxxAxxx<br />
              • BGA without ball size and design weight information - Request CE approval, Design Weight, BGA Information for AxxxAxxx<br />
              • Off the shelf connectors without component spec and design weight information - Request CE approval, Design Weight, Component product specification for AxxxAxxx`,
          },
          {
            id: "6.3",
            description:
              "Verify if Electrical Part, Manufacturer Part and related document as affected objects to this task.",
          },
          {
            id: "6.4",
            description:
              "Verify that all related Inwork Documents are added as resulting object in respective approval task(CE approval task). (This will lock the document to avoid further change).",
          },
          {
            id: "6.5",
            description:
              `Open 'Complete Change Notice Task' from My Tasks list and click on 'Complete Task' by mentioning observations if any in 'Comments' field.<br />
              CE may send back this task for rework if there are any issues. Check for the rework comments and implement the changes. Then complete the task again.`,
          },

        ],
      },


      {
        secondColumnHeading: "ECAD Library Part Creation Activity",
        tasks: [
          {
            id: "7.1",
            description:
              `Verify if Assignee and Reviewer Name are correctly added based Scenario-<br />
              Assignee: Creator (Librarian)<br />
              Reviewer: Reviewer (Librarian)`,
          },
          {
            id: "7.2",
            description:
              `Task Description: Mention details in task description as per scenario and complete CAD activities, 3D model assignment, Part Delivery.<br />
              • Scenario 1: CAD Activities - PDB, CAD, 3D, Part Delivery for AxxxAxxx<br />
              • Scenario 2: CAD Activities - Cell, PDB, CAD, 3D, Part Delivery for AxxxAxxx<br />
              • Scenario 3: CAD Activities - Symbol, PDB, CAD, 3D, Part Delivery for AxxxAxxx<br />
              • Scenario 4: CAD Activities - Symbol, Cell, PDB, CAD, 3D, Part Delivery for AxxxAxxx`,
          },
          {
            id: "7.3",
            description:
              `Verify if Electrical Part, Manufacturer Part and related document as affected objects to this task.`,
          },
          {
            id: "7.4",
            description:
              "Verify if No object is added to Resultant objects to this task",
          },
          {
            id: "7.5",
            description:
              `Ensure below checklists are followed from Windchill for creation or post refinement of symbol, cell, CAD, PDB<br />
              - A0026T1194_SymbolChecklist_DX-Exp<br />
              - A0026A2397_ECAD Librarian Checklist for Cell Creation_Modification<br />
              - A0026T1197_ECAD Librarian Checklist for PDB_CAD_3D_PFA in Windchill`,
          },
          {
            id: "7.6",
            description:
              `Is part released to library and email sent to the requester that the part is available? Add Electrical Part to part delivery email.<br />
              <br />
              Note:<br />
              If CE or Engineer reject the part after the part is added to central library, No need to delete CAD and Mapping of the part`,
          },
          {
            id: "7.7",
            description:
              `After part delivery (Once part is available in Library), whenever there is change in Classification from Unclassified or from any other classification to proper classification, we should be informing Vijay about the details of proper Classification with part number. So that he can delete old entry in SQL server to avoid the duplication. <br />
            Note: If re-classification is happening well before adding CAD or PDB, part will not be synced to SQL hence we don’t have to report this to Vijay.  `,
          },



        ],
      },


      {
        secondColumnHeading: "MCAD 3D Model Creation for Electrical Part",
        tasks: [
          {
            id: "8.1",
            description:
              `General Instructions:<br />
              1. If the 3D model is within the tolerance range, Minimum~Maximum, then we can assign the model to the part in EDM.<br />
              2. If a 3D model falls out of the Placement outline then do not assign the model. Request for new 3D model.<br />
              3.Ensure that the model is aligned correctly on the footprint, ensuring Assembly outline, pins, cell origin and 3D model are aligned correctly.<br />
              4.Parts which have multisource counterpart should use the max height model assigned to all affected parts.<br />
              5.The DXF of cells sent to MCAD should not have Pin number layer switched ON. <br />
              6.Ensure model is placed at 0,0,0 board origin before generating step file. <br />
              7.Verify that all package names in EDM should be in Metric. Since package name is required in MCAD input file.<br />
              8.Once MCAD assigns 3D model to a part in Windchill, the model should be downloaded and assigned to the part in EDM 3D Model Manager.`,
          },
          {
            id: "8.2",
            description:
              `Verify if Assignee and Reviewer Name are correctly added<br />
              Assignee: Creator (Librarian)<br />
              Reviewer: GEE Elec MCAD Work Assignment Grp<br />
           
              Note:  <br />
              1. MCAD will be Reviewer always. Librarians will be assignee<br />
              2.Once CA task is send to MCAD do not switch assignee and reviewer name. `,
          },

          {
            id: "8.3",
            description:
              "Task Description: <Should be blank>",
          },

          {
            id: "8.4",
            description:
              "Verify if Electrical Part as affected objects to this task.",
          },



          {
            id: "8.5",
            description:
              "Verify if No object is added to Resultant objects to this task",
          },
          {
            id: "8.6",
            description:
              `Is MCAD input file created and added as attachments in CA task. Refer document A0067R6426_Work Instruction for ECAD-MCAD Help Document. <br />
              Note: <br />
              1. In case of multiple parts in one EPR create individual file for each part.<br />
              2. In case of rework task from MCAD. Do not remove existing files from CA task. Add new files with appropriate comment. `,
          },

          {
            id: "8.7",
            description:
              `Is DXF of all cells are attached are added as attachments in CA task. Refer document A0067R6426_Work Instruction for ECAD-MCAD Help Document. <br />
        
              Note: In case of rework task from MCAD. Do not remove existing files from CA task. Add new files with appropriate comment. `,
          },

          {
            id: "8.8",
            description:
              `If 3D model is available and assign to the part in EDM, then is .stp file is attached as attachments in CA task. Refer document A0067R6426_Work Instruction for ECAD-MCAD Help Document. <br />
              If 3D model is not available then step file is not required.<br />
              Note: In case of rework task from MCAD. Do not remove existing files from CA task. Add new files with appropriate comment. `,
          },
          {
            id: "8.8",
            description:
              `Open 'Complete Change Notice Task' from My Tasks list and click on 'Complete Task' by mentioning observations if any in 'Comments' field.<br />
              Note: MCAD may send back this task for rework if there are any issues. Check for the rework comments and implement the changes. Then complete the task again.<br />
               `,
          },

        ],
      },


      {

        secondColumnHeading: "Engineer Review and Approval",
        tasks: [
          {
            id: "9.1",
            description:
              `Verify if Assignee and Reviewer Name are correctly added<br />
          Assignee: Creator (Librarian)<br />
          Reviewer: Requester of the EPR`,
          },
          {
            id: "9.2",
            description:
              "Task Description: Engineer Review and Approval for AxxxAxxx",
          },

          {
            id: "9.3",
            description:
              "Verify if Electrical Part, Manufacturer Part and related document as affected objects to this task.",
          },
          {
            id: "9.4",
            description:
              "Verify if No object is added to Resultant objects to this task",
          },
          {
            id: "9.5",
            description:
              `MCAD has assigned 3D model to a part in Windchill, the model should be downloaded and assigned to the part in EDM 3D Model Manager. Refer document A0067R6426_Work Instruction for ECAD-MCAD Help Document. `,
          },
          {
            id: "9.6",
            description:
              `Open 'Complete Change Notice Task' from My Tasks list and click on 'Complete Task' by mentioning observations if any in 'Comments' field.<br />
          Note: <br />
          - Engineer may send back this task for rework if there are any issues. Check for the rework comments and implement the changes. Then complete the task again.<br />
          - After part verification in central library, librarian will complete this task.`,
          },
        ],
      },


      {

        secondColumnHeading: "ECAD Librarian Final Review",
        tasks: [
          {
            id: "13.1",
            description:
              `Action: Final review based on all Approvals received.<br />
              Associate Electrical part, MPN and related documents as resulting objects`,
          },
          {
            id: "13.2",
            description:
              `Verify if Assignee and Reviewer Name are correctly added<br />
              Assignee: Creator (Librarian) `,
          },

          {
            id: "13.3",
            description:
              "Task Description: ECAD Librarian Final Review for AxxxAxxx",
          },
          {
            id: "13.4",
            description:
              "Verify if Electrical Part, Manufacturer Part and related document as affected objects to this task.",
          },
          {
            id: "13.5",
            description:
              "Verify in Resulting Objects, add Electrical part then select the required release type as per Target release state of Software part release.",
          },
        ],
      },


      {

        secondColumnHeading: "MRP Update - Plant Name – xxxxxx,xxxxx",
        tasks: [
          {
            id: "14.1",
            description:
              `Once Final Review task for AxxxAxxx is completed, Request MRP Update for AxxxAxxx, Plant Name – xxxxxx,xxxxx is triggered if any<br />
             
              Request MRP Update for AxxxAxxx is not required for below scenario-<br />
              1) The part is rejected by Requester.<br />
              2) The part is for Auburn/Birmingham/College Plant/Non ZF-Plants like Flextronics, Kimball, Alfdorf Plants<br />
              3) The part is for Core Projects`,
          },
          {
            id: "14.2",
            description:
              ` Verify if Assignee Name are correctly added<br />
              Assignee: CM<br />
              Reviewer: Blank`,
          },

          {
            id: "14.3",
            description:
              "Verify if No object is added to affected and Resultant objects to this task",
          },
        ],
      },



      {

        secondColumnHeading: "If Part is Rejected at any stage . Please follow below steps: ",
        tasks: [
          {
            id: "15.1",
            description:
              `Go to electrical part in windchill > Remove associated Standard notes, spec sheets and Active Manufacturer part and Published datasheet from the Electrical part<br />
             
              Note: 1. No need to delete part from EDM once part is sync to EDM even if Engineer reject the part.`,
          },
          {
            id: "15.2",
            description:
              "In CN implementation plan remove all Open tasks. ",
          },

          {
            id: "15.3",
            description:
              `Is the task which is in implementation with you is renamed to "CN Rejection Task"?`,
          },
          {
            id: "15.4",
            description:
              `Verify that all related Inwork electrical part, order code, documents are added as resulting object and set as "Reject".`,
          },
          {
            id: "15.5",
            description:
              `Open 'Complete Change Notice Task' from My Tasks list and click on 'Complete Task' by mentioning observations if any in 'Comments' field.`,
          },
          {
            id: "15.6",
            description:
              `If part is rejected - Verify following State:<br />
              • CN - Resolved<br />
              • Resultant Part in Windchill and in EDM - Reject<br />
              • Manufacturer part - Discontinue (if New), (Contact Ali, if tool doesnot allow to discontinue MPN for lower Maturity CNs)<br />
              • Related Document - Reject<br />
              • If Part is added to Library, After part is rejected, Verify the part state as "Rejected" in DX-Databook `,
          },

        ],
      },

    ];
  };


  calculateProgress = () => {
    const tasks = this.getAllTasks().flatMap((group) => group.tasks); // Flatten all tasks from groups
    const totalTasks = tasks.length; // Total number of tasks
    const selectedCount = Object.keys(this.state.selectedRemarks).length; // Selected remarks count
    return Math.round((selectedCount / totalTasks) * 100);
  };

  render() {
    const progress = this.calculateProgress();
    const taskGroups = this.getAllTasks();

    return (
      <div className="full-single-body">
        {/* Menu Bar */}
        <div
          className="menu-bar epr"
          style={{
            background: `linear-gradient(to right, green ${progress}%, #cfe2ff ${progress}%)`,
            borderRadius: "5px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            padding: "10px",
            transition: "background 0.4s ease-in-out",
          }}
        >
          <button className="menu-item" onClick={this.showTaskView}>
            Electronic Part Request
          </button>
        </div>

        {/* Task View */}
        {this.state.showTasks &&
          taskGroups.map((group, index) => (
            <div className="table-container" key={index}>
              <h3>{group.heading}</h3>
              <table className="table table-bordered">
                <thead className="table-primary">
                  <tr>
                    <th scope="col" className="srno">Sr No.</th>
                    <th scope="col">{group.secondColumnHeading}</th> {/* Dynamic second column heading */}
                    <th scope="col" className="remark">Remark</th>
                  </tr>
                </thead>
                <tbody>
                  {group.tasks.map((task) => (
                    <tr key={task.id}>
                      <th scope="row">{task.id}</th>
                      <td>
                        {/* Render description using dangerouslySetInnerHTML */}
                        <div
                          dangerouslySetInnerHTML={{
                            __html: task.description, // Use the HTML content here
                          }}
                        />
                      </td>
                      <td>
                        <label className="rdobtn">
                          <input
                            type="radio"
                            name={`remark-${task.id}`}
                            value="verified"
                            onChange={() =>
                              this.handleRadioChange(task.id, "verified")
                            }
                          />
                          Verified
                        </label>
                        <label className="rdobtn">
                          <input
                            type="radio"
                            name={`remark-${task.id}`}
                            value="na"
                            onChange={() =>
                              this.handleRadioChange(task.id, "na")
                            }
                          />
                          NA
                        </label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

        {/* Display Content */}
        <div className="display-area">{this.state.displayContent}</div>
      </div>
    );
  }
}
