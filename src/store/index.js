import { createStore } from 'vuex'
import home from "./modules/home"
import usahome from "./modules/usahome"
import macos from "./modules/macos"


const store = createStore({
    modules: {
      home,
    usahome,
      macos
  }
})

export default store