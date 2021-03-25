import { Survey } from "survey-engine/lib/data_types";
import { SimpleSurveyEditor } from "../../../editor-engine/utils/simple-survey-editor";
import { Q_CBS } from "./questions/cbs";
import { CFQGroup } from "./questions/cfq";
import { DemographieGroup } from "./questions/demographie";
import { EQ5DGroup } from './questions/eq5d';
import { HADSGroup } from "./questions/hads";
import { Q_IPAQ } from "./questions/ipaq";
import { MedicineGroup } from "./questions/medicine";
import { SF36Group } from "./questions/sf-36";


export const generateT0 = (): Survey | undefined => {
    const surveyKey = 'TO';

    const surveyEditor = new SimpleSurveyEditor({
        surveyKey: surveyKey,
        name: new Map([
            ["en", "T0"],
        ]),
        description: new Map([
            ["en", "..."],
        ]),
        durationText: new Map([
            ["en", "..."],
        ])
    })


    // *******************************
    // Questions
    // *******************************
    // EQ5D group
    const eq5dGroupEditor = new EQ5DGroup(surveyKey, true, true);
    // surveyEditor.addSurveyItemToRoot(eq5dGroupEditor.getItem());

    const cfqGroup = new CFQGroup(surveyKey);
    surveyEditor.addSurveyItemToRoot(cfqGroup.getItem());

    const hadsGroup = new HADSGroup(surveyKey);
    surveyEditor.addSurveyItemToRoot(hadsGroup.getItem());

    surveyEditor.addSurveyItemToRoot(Q_CBS(surveyKey, true));

    surveyEditor.addSurveyItemToRoot(Q_IPAQ(surveyKey, true));

    const sf36Group = new SF36Group(surveyKey);
    surveyEditor.addSurveyItemToRoot(sf36Group.getItem());

    const medicineGroupEditor = new MedicineGroup(surveyKey);
    surveyEditor.addSurveyItemToRoot(medicineGroupEditor.getItem());

    const demographieGroupEditor = new DemographieGroup(surveyKey);
    surveyEditor.addSurveyItemToRoot(demographieGroupEditor.getItem());

    return surveyEditor.getSurvey();
}
