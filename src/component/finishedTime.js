/**
 * Created by Administrator on 2017/7/26.
 */
import React from 'react';
import DatePicker from 'material-ui/DatePicker';

const FinishedTime = () => (
    <div className="time-children">
        <DatePicker hintText="时间选择" id="start" mode="landscape" />
        <span>~&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <DatePicker hintText="时间选择" id="end" mode="landscape" />
    </div>
);

export default FinishedTime;