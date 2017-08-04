/**
 * Created by Administrator on 2017/7/26.
 */
import React from 'react';
import Checkbox from 'material-ui/Checkbox';

const styles = {
    block: {
        maxWidth: 150,
    },
    checkbox: {
        marginBottom: 16,
    },
};

const MileCheckbox = () => (
    <span  className="category-children">
        <Checkbox
            label="L<10"
            style={styles.checkbox}
        />
        <Checkbox
            label="10≤L≤20"
            style={styles.checkbox}
        />
        <Checkbox
            label="20≤L≤30"
            style={styles.checkbox}
        />
        <Checkbox
            label="30≤L≤50"
            style={styles.checkbox}
        />
        <Checkbox
            label="50<L"
            style={styles.checkbox}
        />
        <Checkbox
            label="全选"
            style={styles.checkbox}
        />

    </span>
);

export default MileCheckbox;