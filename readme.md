# Extberry is wrapper for different Browser Extensions APIs

This library helps you to create crossbrowser extensions, when you have different API.

[![npm version](https://badge.fury.io/js/extberry.svg)](https://badge.fury.io/js/extberry)

## Install Extberry
```bash
npm install --save extberry
```


## Use Extberry
```javascript
import Extberry from 'extberry';
Extberry.openTab({
    url: "https://berrywallet.io?src=My_Extension_With_Extberry"
});
```