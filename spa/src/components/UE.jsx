import { useContext } from 'react';
import { SpreadsheetContext } from './SpreadsheetContext.jsx';

export default function UE(props) {
  const {title} = props
  const {appUrl, folder, formUrl} = useContext(SpreadsheetContext);;
  return <iframe title={`"title"`} src={`${appUrl}/canvas/${formUrl}?folder=${folder}`} width="2000" height="1000"></iframe>
}