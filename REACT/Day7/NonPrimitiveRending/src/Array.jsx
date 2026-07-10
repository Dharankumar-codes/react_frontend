// Array Rendering Method using map
const Heroes=["Luffy","Sanji","Zoro","Robin","chopper"]



const Array = () => {
  return (<> <div>
    <h1>Heroes List</h1>
    <div>{Heroes.map((e,i)=>(
        <ul className="p-1 mg-2"><li>{e}</li></ul>
    ))}</div>

    </div></>
   
  )
}

export default Array;