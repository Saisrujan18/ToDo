import react, { useState } from "react";

function Lists()
{
    const [elem,UpdateElem]=useState("");
    const [listarr,Updatelistarr]=useState([]);
    const [mini,Updatemini]=useState([]);
    const [selected,UpdateSelected]=useState([]);
    
    function Up(event)
    {
        const fresh=event.target.value;
        UpdateElem(fresh);
    }
    
    function Upp()
    {
        const q=[elem];
        const le=[...listarr,q];
        Updatelistarr(le);
        UpdateElem("");
        const mei=[...mini,[]];
        Updatemini(mei);
    }
    
    function ask(event)
    {
        const which=event.target.id;
        var temp=[];
        for(var i=0;i<listarr.length;i++)
        {
            if(i!=which)
            {
                temp=[...temp,listarr[i]];
            }
        }
        Updatelistarr(temp);
    }
    
    function Addtasks(event)
    {
        const where=event.target.index;
        var temp=[];
        for(var i=0;i<mini.length;i++)
        {
            
        }
    }
    function Card(props,index)
    {
        return(
            <div className='q'>
                <button id={index} onClick={ask}>x</button>
                <p>{props}</p>
                <button id={index} onClick={Addtasks}>+</button>
            </div>
        )
    }

    function miniAsk(event)
    {
        const whic=event.target.id;
        var tem=[];
        for(var i=0;i<selected.length;i++)
        {
            if(i!=whic)
            {
                tem=[...tem,selected[i]];
            }
        }
        UpdateSelected(tem);
    }

    function miniCard(props,index)
    {
        return <p id={index} onClick={miniAsk}>{props}</p>
    }
    function Show(props)
    {
        return props.map(Card);
    }

    function Pleasetask(props)
    {
        return props.map(miniCard);
    }
    return(
        <div className="Main">
            <div className="Lists">
                <h1>Lists</h1>
                <div className="View">
                    <input onChange={Up} value={elem} placeholder="Type Something"/>
                    <button onClick={Upp} >ADD</button>
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