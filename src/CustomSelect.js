import React from 'react';

import Select from 'react-select';

const options=[
    {label:'À VISTA', value:'parcel_one'},
    {label:'2 X', value:'parcel_two'},
    {label:'3 X', value:'parcel_three'},
    {label:'4 X', value:'parcel_four'},
    {label:'5 X', value:'parcel_five'},
    {label:'7 X', value:'parcel_seven'},
    {label:'8 X', value:'parcel_eight'},
    {label:'9 X', value:'parcel_nine'},
    {label:'10 X', value:'parcel_ten'},
    {label:'11 X', value:'parcel_eleven'},
    {label:'12 X', value:'parcel_twelve'},
]


export function CustomSelect(props) {
    return <div>
        <Select options={options}  />
    </div>
}