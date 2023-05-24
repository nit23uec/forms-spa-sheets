import {Item, TabList, TabPanels, Tabs} from '@adobe/react-spectrum'

function Wizard(props) {
    return (
        <Tabs aria-label="History of Ancient Rome">
        <TabList>
            <Item key="FoR">Founding of Rome</Item>
            <Item key="MaR">Monarchy and Republic</Item>
            <Item key="Emp">Empire</Item>
        </TabList>
        <TabPanels>
            <Item key="FoR">
            Arma virumque cano, Troiae qui primus ab oris.
            </Item>
            <Item key="MaR">
            Senatus Populusque Romanus.
            </Item>
            <Item key="Emp">
            Alea jacta est.
            </Item>
        </TabPanels>
    </Tabs>
   );
}

export default Wizard;