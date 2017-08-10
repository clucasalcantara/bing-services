# Bing Services
*An interface to provide access to bing services from frontend requests*

## Installation
```bash
$ yarn add bing-services
```

## Usage
Require or import it in your file

```javascript
import searchBingImages from "bing-services"

//Use the searchBingImages to get your pics in response
onImageSearch = async (term) => {
  searchBingImages(term)
  .then(response => response.data.value)
  .catch(error => { throw new Error(error) })
}

/** 
* Use, for example in a component action propertie or
* even in a onClick button, just remember to always pass the 
* term of search.
**/


// Mock component Example
<YourSearchComponent
  placeholder="Search images"
  style={style.search}
  onSearch={this.onImageSearch}
/>
