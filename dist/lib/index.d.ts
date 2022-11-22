/// <reference types="react" />
type Props = {
    fields: Object;
    preloadData?: Object;
    payload?: (res: Function, success: Function, error: Function) => any;
};
export default function BootstrapedForm({ fields, preloadData, payload, }: Props): JSX.Element;
export {};
