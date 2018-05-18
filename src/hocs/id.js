// @flow

import * as React from 'react';
import RefId from 'canner-ref-id';
import {HOCContext} from './context';
import type {Query} from '../query';

type Props = {
  refId: RefId,
  keyName: string,
};

export default function connectIdAndContext(Com: React.ComponentType<*>) {
  return class ComponentConnectIdAndContext extends React.Component<Props> {
    refId: RefId;
    query: Query;
    reset: ResetDef;

    render() {
      const {refId, keyName} = this.props;
      const myRefId = refId ? refId.child(keyName) : new RefId(keyName);
      return <HOCContext.Consumer>
        {context => (
          <Com {...this.props}
            refId={myRefId}
            query={context.query}
            reset={context.reset}
            fetch={context.fetch}
            subscribe={context.subscribe}
            request={context.request}
            deploy={context.deploy}
            updateQuery={context.updateQuery}
          />
        )}
      </HOCContext.Consumer>
    }
  };
}