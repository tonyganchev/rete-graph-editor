/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare module 'rete-context-menu-plugin';
declare module 'rete-area-plugin';
declare function zoomAt();