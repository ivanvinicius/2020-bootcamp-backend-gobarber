export default interface IChacheProvider {
  save(key: string, value: string): Promise<void>;
  recover(key: string): Promise<string | null>;
  invalidate(key: string): Promise<void>;
}
