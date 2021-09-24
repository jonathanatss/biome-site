import { TagCloud } from "react-tagcloud";
import style from "./style.module.css";
import { useState, useEffect, useContext } from "react";
import { PeopleContext } from "@components/PeopleContext";

export default function TagCloudContent({ tags }) {
  const { selectedTags, setSelectedTags } = useContext(PeopleContext);

  let tagList = [];
  tags.ptags.forEach((tagObj) => {
    const aux = { value: tagObj.tag, count: tagObj.pessoas.length };
    tagList.push(aux);
  });

  let selectedTagsLocal = [...selectedTags];

  const [data, setData] = useState(tagList);

  //console.log(data);

  /*
  //obs: é possível fazer cores pré-definidas
  const [data, setData] = useState([
    { value: "JavaScript", count: 35 },
    { value: "React", count: 30 },
    { value: "Nodejs", count: 28 },
    { value: "Express.js", count: 25 },
    { value: "HTML5", count: 33 },
    { value: "MongoDB", count: 18 },
    { value: "CSS3", count: 32 },
    { value: "CSS4", count: 31 },
    { value: "CSS5", count: 26 },
  ]);
  */

  const colorOptions = {
    luminosity: "dark",
    hue: "green",
  };

  function handleSelectTag(tag) {
    //se a tag selecionada já estiver no array de tags selecionadas, remova-a do array e substraia o 'count' em 5
    //se não estiver, adicione-a ao array e some o 'count' em 5
    //obs: count define o tamanho da fonte. maior o count, maior a fonte da letra
    if (!selectedTags.includes(tag)) {
      selectedTagsLocal.push(tag);
      let dataCopy = [];
      data.forEach((element) => {
        if (element.value == tag) {
          element.count += 5;
        }
        dataCopy.push(element);
      });
      setData(dataCopy);
    } else {
      //removendo elemento do array das selecionadas
      selectedTagsLocal.splice(selectedTags.indexOf(tag), 1);
      let dataCopy = [];
      data.forEach((element) => {
        if (element.value == tag) {
          element.count -= 5;
        }
        dataCopy.push(element);
      });
      setData(dataCopy);
    }
    setSelectedTags([...selectedTagsLocal]);
    //console.log(selectedTags);
  }

  return (
    <div style={{ margin: "50px", padding: "5px" }}>
      <TagCloud
        minSize={15}
        maxSize={30}
        tags={data}
        shuffle={false}
        colorOptions={colorOptions}
        onClick={(tag) => handleSelectTag(tag.value)}
        className={style.tagCloud}
      />
    </div>
  );
}

//https://github.com/madox2/react-tagcloud
