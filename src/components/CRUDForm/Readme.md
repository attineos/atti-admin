A Form

```js 
config={
    submitButtonText: 'Submit button',
    urls: {
        get: 'https://jsonplaceholder.typicode.com/users/1',
        create: 'https://jsonplaceholder.typicode.com/users',
        update: 'https://jsonplaceholder.typicode.com/users/1',
    },
    groups: [{
        name: 'profileDetails',
        label: 'Profile Details',
        fields: [{
            'field': 'id',
            'label': 'Id',
            'type': 'number',
            'readOnly': true,
        }, {
            'field': 'name',
            'label': 'Name',
            'type': 'text',
        }, {
            'field': 'username',
            'label': 'Username',
            'type': 'text',
        },{
        'field': 'address.city',
        'label': 'Ville',
        'type': 'select',
        'default':'Tokyo',
        'options': [{ id: 'Paris' }, { id: 'Tokyo' }, { id: 'Rouen' }, { id: 'New York' }, { id: 'Londres' }, { id: 'Madrid' }, { id: 'Rome' }],
      }]
    }, {
        name: 'company',
        label: 'Company Details',
        fields: [{
            'field': 'company.name',
            'label': 'Name',
            'type': 'text',
        }, {
            'field': 'company.catchPhrase',
            'label': 'Catch phrase',
            'type': 'text',
        }]
    }, {
        name: 'contact',
        label: 'Contact Details',
        hidden:true,
        fields: [{
            'field': 'phone',
            'label': 'Phone',
            'type': 'text',
        }
        ]
    }]  
}

;<CRUDForm
    mode= 'MODE_NEW'
    config={config}
/>
```
