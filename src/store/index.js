import { createStore } from 'vuex'
import home from "./modules/home"
import usahome from "./modules/usahome"
import macos from "./modules/macos"
import loading from "./modules/loading"



const store = createStore({
    modules: {
      home,
    usahome,
    macos,
      loading
  }
})

export default store