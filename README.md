# tablesearch
 
Tablesearch is a javascript module that allows for any table with a specified id to be searched with any textinput field with a specified id. Tablesearch is written in vanilla js and has no dependencies.
 
## Installation
 
Tablesearch can be installed using npm
```
npm install tablesearch --save
```

## Usage
 
Require the package
```javascript
var tablesearch = require('tablesearch');
```

Or import it
```javascript
import tablesearch from 'tablesearch';
```

Call the tablesearch function passing a table id and a search textbox id
```html
<input id="my-search" type="text" />
<table id="my-table">
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Company</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>Doe</td>      
      <td>ACME, Inc.</td>
    </tr>
    <tr>
      <td>Jane</td>
      <td>Smith</td>      
      <td>Initech</td>
    </tr>
  </tbody>
</table>
```

```javascript
tablesearch('my-table', 'my-search');
```

## Contributing
 
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
 
## History
 
Version 0.1 (2017-10-13) - Initial development
 
## License
 
The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.