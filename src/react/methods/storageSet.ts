import { NOT_SUPPORTED, debug } from "../index";

type SessionStorageSet = ({
  key,
  value
}: {
  key: string,
  value: any
}) => {
  status: boolean | typeof NOT_SUPPORTED
}

/**
 * sessions storage set.
 */
const sessionStorageSet: SessionStorageSet = ({ key, value }) => {
  // if (!supportSessionStorageSet()) { debug("sessionStorageSet", 1); return { status: NOT_SUPPORTED } }

  try {
    window.sessionStorage.setItem("__telegram__" + key, JSON.stringify(value))
    return { status: true }
  } catch (e) { }
  return { status: false }
}

/**
 * Method support check
 */
export const supportSessionStorageSet = () => true

export default sessionStorageSet
