# is-good-or-bad
> EVERYTHING'S RELATIVE

А library that helps to determine whether it is good or bad.

[Git](https://github.com/zeallot/is-good-or-bad) [NPM](https://www.npmjs.com/package/is-good-or-bad)

## Installation
- In your project run the command ```yarn add is-good-or-bad``` or ```npm install is-good-or-bad```
- Import in project
```javascript
import isGoodOrBad, { isGood } from 'is-good-or-bad';
```

## Exapmles
```javascript
isGood('Mom') // always true, it's exception

isGoodOrBad('War') // War is bad

isBad('My cat') // return false
```

## Contributing

1) Fork it!
2) Create your feature branch: ```git checkout -b my-new-feature```
3) Commit your changes: ```git commit -am 'Add some feature'```
4) Push to the branch: ```git push origin my-new-feature```
5) Submit a pull request.

__Our application is not used:__
- [Microsoft](https://www.microsoft.com)
- [Facebook](https://www.facebook.com)
- [Amazon](https://www.amazon.com)
- [Google](https://www.google.com)

## Release notes
__v. 1.1.2__
- add exception
- add more companies that do not use our application

__v. 1.1.1__
- add info about who is not used our app

__v. 1.1.0__
- add function: ```isGood```, ```isBad```
- rename ```isGood``` to ```isGoodOrBad```
- add __README__

__v. 1.0.0__
- init project

