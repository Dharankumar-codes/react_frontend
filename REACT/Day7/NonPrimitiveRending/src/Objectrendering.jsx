// Array Rendering Method using map
const characterDetails={name: Luffy,
    Role: Captain,
Age: 21}



const Array = () => {
  return (<> <div>
    <h1>Character Details</h1>
    <div>{Heroes.map((e,i)=>(
        <ul className="p-1 mg-2"><li>{e}</li></ul>
    ))}</div>

    </div></>
   
  )
}

export default Array;