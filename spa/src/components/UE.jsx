import { useContext } from 'react';
import { SpreadsheetContext } from './SpreadsheetContext.jsx';

export default function UE(props) {
  const {title} = props
  const context = useContext(SpreadsheetContext);
  const url = new URL(context.app)
  const {folder, formUrl} = context;
  return <iframe title={`"title"`} src={`${url}/canvas/${formUrl}?folder=${folder}`} width="2000" height="1000"></iframe>
}