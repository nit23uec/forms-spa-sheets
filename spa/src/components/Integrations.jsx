
import { useState } from "react";
import ListConfigurations from "./configuration/ListConfigurations";

function Integrations(props) {

  const [selected, setSelected] = useState();
  const [configId, setConfigId] = useState("");
  
  const submitTypes = [
    {
      type: 'excel',
      cc: false,
      title : 'Submit to Spreadsheet',
      description : 'Store submitted data in Microsoft Excel or Google sheet.',
      thumbnail: 'https://images.ctfassets.net/lzny33ho1g45/1axzhgm4thtZi42OxsNeZk/8414378ccb84bbb5586dc9f56315731c/Google_Sheets_vs_Excel_hero.jpg'
    },
    {
      type: 'blob',
      cc: true,
      title: 'Azure Blob Storage',
      description: 'Persist form data and attachments as collection of blobs in Azure Storage Account',
      thumbnail: 'https://symbols.getvecta.com/stencil_27/86_storage-blob.476c91d0b1.svg'
    },
    {
      type: 'dynamics',
      cc: true,
      title: 'Microsoft Dynamics',
      description: 'Store data as MS Dynamic entities like Lead, Contact or Custom entity',
      thumbnail: 'https://www.crmsoftwareblog.com/wp-content/uploads/Dynamics-Waves.jpg'
    }
  ]

 const selectItem = async (event, item) => {
  if (event.target instanceof HTMLDivElement ||
      event.target instanceof HTMLImageElement || 
      event.target instanceof HTMLHeadingElement ||
      event.target instanceof HTMLParagraphElement) {
    if( item?.type === selected?.type) {
       setSelected(null);
    } else {
      setSelected(item);
    }
  }
 }
  return (
    <div className="integrations">
      <div className="settings">
        <input type="button" value="Save Settings" onClick={() => props?.saveSettings('submit',{ type: selected?.type, configId: configId} )}></input>
      </div>
        <div className="cards">
        {submitTypes?.map((item) => 
          <div class="card" onClick={(event) => selectItem(event, item)}
          className={selected?.type === item.type ? 'selected card' : "card"}>
              <img src={item.thumbnail}></img>
              <div class="card-body">
                <h2 class="card-title">{item.title}</h2>
                <p>{item.description} <a href="#1">Read more</a></p>
              </div>
              {item.cc && selected?.type === item.type &&
                <div class="card-footer">
                  <ListConfigurations  onChange={(value) => setConfigId(value)}
                  integrations ={true} allowRefresh={true} allowAdd={true} name={item.type}></ListConfigurations>
                </div>
                }
          </div>)}
        </div>
    </div>
  )
    
}

export default Integrations;