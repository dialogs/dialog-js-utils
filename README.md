Dialog JavaScript utils
=======================

A collection of utility libraries used by Dialog projects.

Installation
------------

```
npm install --save @dlghq/dialog-utils
```

Usage
-----

```js
import { isElectron } from '@dlghq/dialog-utils';

console.log('isElectron: ', isElectron());
```

Redux
-----

```js
import { Field } from '@dlghq/dialog-utils';

Field.create({ value: '' })
  .map((value) => 'foo')
  .flatMap((value, error, pending) => new Field(value, error, true))
  .render((value, error, pending) => <FieldView value={value} pending={pending} />);

function addContact(uid: number) {
  return ({ dispatch, messenger }) => {
    Field.dispatch({
      dispatch,
      type: '@@dialog/USER_CONTACT_ADD',
      context: uid,
      action: messenger.contacts.add(uid),
      initialState: null
    });
  };
}

dispatch(addContact(123));
// { type: '@@dialog/USER_CONTACT_ADD', payload: { value: null, error: null, pending: true }, meta: { context: 123 } }
// then
// { type: '@@dialog/USER_CONTACT_ADD', payload: { value: <response>, error: null, pending: false }, meta: { context: 123 } }
// or
// { type: '@@dialog/USER_CONTACT_ADD', payload: { value: null, error: <error>, pending: false }, meta: { context: 123 } }

```

License
-------
[Apache-2.0](LICENSE)
