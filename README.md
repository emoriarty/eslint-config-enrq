# eslint-config-enrq


## Setup

Installing current package is pretty easy. Just go to the specific package you want to lint and add the next line into the `devDepencies` property of the `package.json`:

```
  "devDependecies": {
    ...
    "eslint-config-enrq": "emoriarty/eslint-config-enrq#v1.0.0",
    ...
  }
```

Once the file has been saved, `yarn install` (or just `yarn`) will do the rest.

The lists below shows what plugins and configs come along included. There's no need to reinstall then again in the target package, it will be done automatically.

## Configuration

The next step is to update the eslint configuration. Most of the cases it is a json-like file: `.eslintrc` or `.eslintrc.json`. It should look like below:

```
{
  "extends": [
    "eslint-config-enrq",
    "eslint-config-enrq/react" // React only projects
  ]
}
```

Because, the extensibility nature of `eslint`, predefined rules can be added or changed. Therefore, a configuration file can look like this:

```
{
  "root": true,
  "extends": [
    "eslint-config-enrq",
    "eslint-config-enrq/react"
  ],
  "env": {
    "browser": true,
    "jest": true
  }
}
```

