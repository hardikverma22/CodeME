import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

const Panels = () => {
  return (
    <PanelGroup direction="horizontal">
      <Panel defaultSize={20} minSize={20}>
        left
      </Panel>
      <PanelResizeHandle />
      <Panel minSize={30}>middle</Panel>
      <PanelResizeHandle />
      <Panel defaultSize={20} minSize={20}>
        right
      </Panel>
    </PanelGroup>
  );
};

export default Panels;
