# Bootstrapped Form

### Create a full form with validations, all with just 5 lines of code

### Visit the project on Github (link is by your right hand side) to see image examples, 

# Getting started

### Compatibility

Your project needs to use React 16.3 or later.

### Installation

Add Bootstrapped Form to your project by executing **npm install @osaze12/bootstrapped-form** or **yarn add @osaze12/bootstrapped-form**.

### Usage

Here's an example of basic usage:

```javascript
import React, { useState } from "react";
import BootstrapForm from "@osaze12/bootstrapped-form";

// comes with stying
import "@osaze12/bootstrapped-form/dist/index.css";

function MyApp() {
  return (
    <div>
      <BootstrapedForm
        fields={{
          email: "email|required",
          password: "password|requiredvisibility",
          confirmPassword: "password|required|visibility",
          createAccount: "btn",
        }}
      />
    </div>
  );
}
```

Adding a select option & a checkbox using these code:

```javascript
// comes with stying
import "@osaze12/bootstrapped-form/dist/index.css";
const genderList = [
  { name: "Male", value: "M" },
  { name: "Female", value: "F" },
];

function MyApp() {
  return (
    <div>
      <BootstrapedForm
        fields={{
          gender: `select|${JSON.stringify(genderList)}`,
          rememberMe: "checkbox",
          createAccount: "btn",
        }}
      />
    </div>
  );
}
```

And then to get the form data after successful validation, data will be passed to the payload prop, with 3 arguments, example below:

```javascript
<BootstrapedForm
  payload={(data, isAccepted, notAccepted) => {
    // do what ever you want to do with the data here
  }}
  fields={{
    gender: `select|${JSON.stringify(f)}`,
    createAccount: "btn",
  }}
/>
```

You can also add an initial information to the form using the code below:

```javascript

let genderList = [
    {name: "Male", value: "M"},
    {name: "Female", value: "M"}
]

<BootstrapedForm
  preloadData={{
    gender: "M",
  }}
  fields={{
    gender: `select|${JSON.stringify(genderList)}`,
    createAccount: "btn",
  }}
/>
```

# User guide

### Props

| Prop name   |                               Description                                |
| ----------- | :----------------------------------------------------------------------: |
| fields      |  These is where you pass in your form title and values it should accept  |
| preloadData | you want to have initial data on the for, use case is: edit profile form |
| payload     |          return 3 args after form successfully pass validation:          |
|             |                          1) the user form data                           |
|             |             2) a success function, so data can be cleared                 |
|             |           3) an error function, so data would not be cleared              |


### Fields prop accepts the following:

| Name        |                                   Description                                   |
| ----------- | :-----------------------------------------------------------------------------: |
| input type  |            input types includes, text, password, select, email, etc             |
| required    |                   enables form to be checked for invalid data                   |
| visibility  | these adds text visibility and an eye icon to input field, use case is password |
| placeholder |                    these adds a placeholder to input fields                     |
| button      |             adding a button or btn sting value, is read as a button             |


### Preload prop accepts the following:

| Name  |          Description           |
| ----- | :----------------------------: |
| Title | title of exisiting input field |
| Value |  value to load into the field  |


### Payload prop returns the following:

| Name      |                 Description                 |
| --------- | :-----------------------------------------: |
| User data | returns the user form data after validation |
| Success   | a success function, so data can be cleared  |
| Error     | an error function, so data would not be cleared |


# License

ISC License.

# Author

**Agbi Osaze**

**osazeagbi@gmail.com**

**https://www.linkedin.com/in/osaze-agbi-b68328176/**
