import React from 'react'
import {KeyContainer ,BulletPoints} from './styles';

function Key() {
  return (
    <KeyContainer role = 'list'>
        <BulletPoints role = 'listen-item'>
            Not Completed
        </BulletPoints>
        <BulletPoints role = 'listen-item'>
            Completed
        </BulletPoints>
    </KeyContainer>
        )
}

export default Key