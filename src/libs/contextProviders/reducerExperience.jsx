export const INITIAL_EXPERIENCE_STATE={
    firstPersonView:true,
    _360Mode:true,
    ARMode:false,
    modelMode:false,
    hidelevel:{nameOfObject:'',visible:false},
    snapPoint:''
}

export const ACTIONS_EXPERIENCE={
    FIRST_PERSON_VIEW:'FIRST_PERSON_VIEW',
    _360_VIEW:'360_VIEW',
    MODEL_VIEW:'MODEL_VIEW',
    AR_VIEW:'AR_VIEW',
    HIDE_LEVEL:'HIDE_LEVEL',
    RESET:'RESET',
    SNAPPOINT:'SNAPPOINT',
}

export const reducerExperienceFunction=(state,action)=>{
      if (!state || !action) {
        console.warn('reducerExperience: Invalid state or action', { state, action });
        return state || INITIAL_EXPERIENCE_STATE;
    }
    switch (action.type) {
        case '_360_VIEW':
            return {
                ...state,
                firstPersonView:true,
                _360Mode:true,
                ARMode:false,
                modelMode:false,
            }
        case 'MODEL_VIEW':
            return {
                ...state,
                firstPersonView:false,
                _360Mode:false,
                ARMode:false,
                modelMode:true,
            }
        case 'AR_VIEW':
            return {
                ...state,
                firstPersonView:false,
                _360Mode:false,
                ARMode:true,
                modelMode:false,
            }
        case 'HIDE_LEVEL':
            return {
                ...state,
                hidelevel:action.payload,
            }
        case 'RESET':
            return {
                ...state,
                firstPersonView:true,
                _360Mode:true,
                ARMode:false,
                modelMode:false,
            }
        case 'SNAPPOINT':
            return {
                ...state,
                firstPersonView:true,
                snapPoint:action.payload
            }
        default:
            return state;
    }
}
