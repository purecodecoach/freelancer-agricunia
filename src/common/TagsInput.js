import React from "react";
const TagsInput = (props) => {
    const [tags, setTags] = React.useState([]);

    const addTags = event => {
        if (event.key === "Enter" && event.target.value !== "") {
            setTags([...tags, event.target.value]);
            props.selectedTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };
    const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };
    return (
        <div className="tags-input flex flex-wrap">
            <ul className="flex items-center flex-wrap">
                {tags.map((tag, index) => (
                    <li key={index} className="flex items-center bg-scogoddd px-p-10 py-p-3 rounded-full w-max mr-2 mt-1">
                        <span className="text-scogo15 font-normal text-font13 w-auto">{tag}</span>
                       
                        <span className="cursor-pointor material-icons text-font10 text-center font-medium h-4 w-4 rounded-full border leading-4 ml-2 border-scogo15" onClick={() => removeTags(index)}>
                            clear
                        </span>
                    </li>
                ))}
            </ul>
            <input type="text" className="p-0 block w-full font-normal text-font15 text-scogo15 border-none focus:ring-0 py-1" placeholder="" onKeyUp={event => addTags(event)}/>
        </div>
    );
};
export default TagsInput;