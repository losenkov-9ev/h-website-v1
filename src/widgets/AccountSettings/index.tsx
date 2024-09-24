import React from 'react';
import cls from './AccontSettings.module.scss';

import clsx from 'clsx';
import { AccountControl } from '../../features/AccountControl';
import { AccountControlType } from '../../features/AccountControl/types/types';

export const AccontSettings: React.FC = () => {
  return (
    <div className={cls.accontSettings}>
      <div className="container">
        <div className={cls.accontSettings_inner}>
          <div className={clsx(cls.accontSettings_title, 'h-1')}>Управление аккаунтом</div>
          <div className={cls.accontSettings_box}>
            <AccountControl type={AccountControlType.Password} />
            <AccountControl type={AccountControlType.Balance} switchTheme={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
