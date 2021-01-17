import react, { useState } from "react";

function Lists()
{
    const [elem,UpdateElem]=useState("");
    const [listarr,Updatelistarr]=useState([]);
    const [mini,Updatemini]=useState([]);
    const [selected,UpdateSelected]=useState(null);
    const [taskelem,evolve]=useState("");


    function handleChange(event)
    {
        const fresh=event.target.value;
        UpdateElem(fresh);
    }
    
    function handleClick()
    {
        const q=[elem];
        const le=[...listarr,q];
        Updatelistarr(le);
        UpdateElem("");
        const mei=[...mini,[]];
        Updatemini(mei);
    }
    
    // function miniAsk(event)
    // {
    //     const whic=event.target.id;
    //     var tem=mini[whic];
    //     for(var i=0;i<selected.length;i++)
    //     {
    //         if(i!=whic)
    //         {
    //             tem=[...tem,selected[i]];
    //         }
    //     }
    //     UpdateSelected(tem);
    // }
    function Pleasetask(props)
    {
        // return props.map(miniCard);
        console.log(props);
        if(props==null){return ("");}
        return (
            <div>
            <div className="TasksSearch">
                <button id={props} onClick={handletaskClick}>+</button>
                <input id={props} onChange={handleChangeInTasks} value={taskelem}></input>
            </div>
            {mini[props].map(miniCard)}
            </div>
        )
    }
    function handleChangeInTasks(event)
    {
        const temp=event.target.value;
        evolve(temp);
    }
    function handletaskClick(event)
    {
        var temp=[];
        const now=event.target.id;
        for(var i=0;i<mini.length;i++)
        {
            if(now!=i)
            {
                temp=[...temp,mini[i]];
            }
            else
            {
                var te=mini[i];
                te=[...te,taskelem];
                temp=[...temp,te];
            }
        }
        Updatemini(temp);
        evolve("");
    }
    function miniCard(props,index)
    {
        return <p id={index} /*onClick={miniAsk}*/>{props}</p>
    }
    function Show(props)
    {
        return props.map(Card);
    }

    function Card(props,index)
    {
        return(
            <div className='q'>
                <button id={index} onClick={Del}>x</button>
                <p>{props}</p>
                <button id={index} onClick={Addtasks}>+</button>
            </div>
        )
    }
    function Del(event)
    {
        const which=event.target.id;
        var temp=[];
        var tem=[];
        for(var i=0;i<listarr.length;i++)
        {
            if(i!=which)
            {
                temp=[...temp,listarr[i]];
                tem=[...tem,mini[i]];
            }
        }
        Updatelistarr(temp);
        Updatemini(tem);
        UpdateSelected(null);
    }
    function Addtasks(event)
    {
        const where=event.target.id;
        // var temp=(where>=0 && where<mini.length)?mini[where]:null;
        UpdateSelected(where);
        // UpdateSelected(["hey"]);
    }

    return(
        <div className="Main">
            <div className="Lists">
                <h1>Lists</h1>
                <div className="View">
                    <button onClick={handleClick} >+</button>
                    <input onChange={handleChange} value={elem} placeholder="Type Something"/>
                </div>
                {Show(listarr)}
            </div>
        
            <div className="Tasks">
                <h1>Tasks</h1>
                {Pleasetask(selected)}
            </div>
        </div>
    )
}

export default Lists;