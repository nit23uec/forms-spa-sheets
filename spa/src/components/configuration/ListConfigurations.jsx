import { useContext, useEffect, useState } from "react";
import { SpreadsheetContext } from "../SpreadsheetContext";
import Modal from "../Modal";
import ConfigurationWizard from "./ConfigurationWizard";

export default function ListConfigurations(props) {

  const [refresh, setRefresh] = useState(false);
  const [show, setShow] = useState(false);
  const [configs, setConfigs] = useState([]);

  const fetchInfo = () => {
    return fetch('https://main--express--hellofranklin.hlx.page/config/cc.json')
      .then((res) => res.json())
      .then((data) => {
        const cc = {};
        const mapping = {};
        data?.[':names']?.forEach((name) => {
            const configs = [];
            cc[name] = {data : configs};
            data?.[name]?.data?.forEach((item) => {
                if(mapping.hasOwnProperty(item.id)) {
                    mapping[item.id][item.env] = item;
                } else {
                    mapping[item.id] = item;
                    configs.push(item);
                }
            })
        })    
        setConfigs(cc);
        console.log("Data", data)
      })
  }

  const modalClose = () => {
    setRefresh(!refresh);
    setShow(false);
  };

  useEffect(() => {
    fetchInfo();
  }, [refresh]);

  return (
    <>
    <Modal title='Create Configuration' show={show} onClose={() => setShow(false)}>
        <ConfigurationWizard integrations={props.integrations} onClose={() => modalClose()}></ConfigurationWizard>
    </Modal>
        <div className="controls">
          {props.allowRefresh  && 
          <input type="button" value="Refresh" onClick={() => setRefresh(!refresh)}></input>}
          {props.allowAdd  && 
          <input type="button" value="Create" onClick={() => setShow(true)}></input>}
        </div>
       <label>{props.title}</label>
        <select onChange={(e) => props?.onChange && props?.onChange(e.target.value)}>
        <option selected value=""> -- Select an option -- </option>
            {configs?.[props.name]?.data?.map((config, index) => 
            <option key={index} value={config.id}>{config.title}</option> )}
        </select>
    </>
  )
  }