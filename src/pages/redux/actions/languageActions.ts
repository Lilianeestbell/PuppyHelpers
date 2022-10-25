export const CHANGE_LANGUAGE = "change_language";
export const ADD_LANGUAGE = "add_language";

interface ChangeLanguageAction {
    type: typeof CHANGE_LANGUAGE,
    payload: "zh" | "en",
}

interface AddLanguageAction {
    type: typeof ADD_LANGUAGE,
    payload: {name: string, code: string};
}

export type LanguageActionType = ChangeLanguageAction | AddLanguageAction;

export const changeLanguageActionCreator = (languageType:  "zh" | "en" ): ChangeLanguageAction => {
    return {
        type: CHANGE_LANGUAGE,
        payload: languageType,
    }
}

export const addLanguageActionCreator = (name: string, code: string): AddLanguageAction => {
    return {
        type: ADD_LANGUAGE,
        payload: {name, code},
    }
}
