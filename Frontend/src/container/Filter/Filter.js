import './Filter.css'; 
function Filter() {

  return (
<div>

  <input type='checkbox' id='toggle'></input>

 
  <aside class='leftbar'>
    <label for='toggle' class='exit'>X</label>
    <div>
      <input type="checkbox" id="horns" name="horns"></input>
      <label for="horns">Horns</label>
    </div>
  </aside>

 
  <div class='content'>
    <label for='toggle' class='button'>=</label>

    
    </div>

     
  </div>
  );
}

export default Filter;