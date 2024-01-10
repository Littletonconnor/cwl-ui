import { Tab, TabList, TabPanel, Tabs } from 'cwl-ui'

export default function DisabledKeys() {
  return (
    <Tabs disabledKeys={['2']}>
      <TabList aria-label="An example demonstrating how to use disabled keys Tabs">
        <Tab id="1">Tab 1</Tab>
        <Tab id="2">Tab 2</Tab>
        <Tab id="3">Tab 3</Tab>
      </TabList>
      <TabPanel id="1">Tab Panel 1</TabPanel>
      <TabPanel id="2">Tab Panel 2</TabPanel>
      <TabPanel id="3">Tab Panel 3</TabPanel>
    </Tabs>
  )
}
