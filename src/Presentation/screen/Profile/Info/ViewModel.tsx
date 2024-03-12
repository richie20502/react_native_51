import React from 'react'
import { RemoveUserCase } from '../../../../Domain/useCases/userLocal/RemoveUser';

const ProfileInfoViewModel = () => {
    const removeSession = async () => {
        await RemoveUserCase();
    }

    return {
        removeSession
    }
}

export default ProfileInfoViewModel;