import React from "react";
import {QuestionnaireAction} from "@/types/questionnaireTypes";

export const changeTab = (dispatch: React.Dispatch<QuestionnaireAction>, tabId: string) => {
    dispatch({ type: 'SET_ACTIVE_TAB', tabId });
};

export const togglePasswordVisibility = (dispatch: React.Dispatch<QuestionnaireAction>) => {
    dispatch({ type: 'TOGGLE_PASSWORD_VISIBILITY' });
};

export const toggleConfirmPasswordVisibility = (dispatch: React.Dispatch<QuestionnaireAction>) => {
    dispatch({ type: 'TOGGLE_CONFIRM_PASSWORD_VISIBILITY' });
};

export const goToNextStep = (dispatch: React.Dispatch<QuestionnaireAction>) => {
    dispatch({ type: 'GO_TO_NEXT_STEP' });
    dispatch({type:"SET_CURRENT_STEP"})

};

export const goToPreviousStep = (dispatch: React.Dispatch<QuestionnaireAction>) => {
    dispatch({ type: 'GO_TO_PREVIOUS_STEP' });
    dispatch({type:"SET_CURRENT_STEP"})

};
export const readURL = (input: HTMLInputElement) => {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
            const imagePreview = document.querySelector('#imagePreview') as HTMLElement;
            if (imagePreview) {
                imagePreview.style.backgroundImage = `url(${e.target?.result})`;
                imagePreview.style.display = "none";
                imagePreview.style.display = "block";
                setTimeout(() => {
                    imagePreview.style.transition = "opacity 0.5s ease-in-out";
                    imagePreview.style.opacity = "1";
                }, 650);
            }
        }
        reader.readAsDataURL(input.files[0]);
    }
};
