/**
 * This file describes all expected reasons for errors to happen.
 */

type Reason<Cause, Payload extends object = never> = [Payload] extends [never]
  ? { cause: Cause }
  : { cause: Cause } & Payload;

export type Network = Reason<'network'>;
export type Validation = Reason<'validation'>;
export type Server<Message extends string = any> = Reason<
  'server',
  { message: Message }
>;

namespace Reason {
  export const network: Network = {
    cause: 'network',
  };

  export const validation: Validation = {
    cause: 'validation',
  };

  export const server = <Message extends string>(
    message: Message
  ): Server<Message> => {
    return {
      cause: 'server',
      message,
    };
  };
}

export default Reason;
