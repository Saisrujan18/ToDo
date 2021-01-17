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
    
    function miniAsk(event)
    {
        const whic=event.target.id;
        const which=selected;
        var tem=[];
        for(var i=0;i<mini[which].length;i++)
        {
            if(i!=whic)
            {
                tem=[...tem,mini[which][i]];
            }
        }
        var ans=[];
        for(var i=0;i<mini.length;i++)
        {
            if(i!=which)
            {
                ans=[...ans,mini[i]];
            }
            else
            {
                ans=[...ans,tem];
            }
        }
        Updatemini(ans);
        UpdateSelected(which);
    }

    function Pleasetask(props)
    {
        if(props==null){return ("");}
        return (
            <div>
            <div className="Intro">
                <p>Add Tasks to </p>
                <h5>{listarr[props]}</h5>
            </div>
            <div className="TasksSearch">
                <button className="btni createi" id={props} onClick={handletaskClick}>+</button>
                <input className="newi" id={props} onChange={handleChangeInTasks} value={taskelem}></input>
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
        return <p id={index} onClick={miniAsk}>{props}</p>
    }

    function Show(props)
    {
        return props.map(Card);
    }

    function Card(props,index)
    {
        return(
            <div className='InsideTasks'>
                <button className="btn2 create2" id={index} onClick={Del}>x</button>
                <p id={index} onClick={Addtasks}>{props}</p>
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
        UpdateSelected(where);
    }

    return(
        <div className="Main">

            <div className="Lists">
                <h1>Lists</h1>
                <div className="View">
                    <button className="btn create" onClick={handleClick} >+</button>
                    <input className="new" onChange={handleChange} value={elem} placeholder=""/>
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