import axiosInstance from "../../services/index";
import Vue from "vue";
import { EventBus } from "../../services/event-bus";

const state = {
    callout: [],
    menus: [],
    topBanners: [],
    midBanners: [],
    slider: [],
    hometours: [],
    footer: [],
    footerjsons: [],
    aboutUs: [],
    aboutUsTopJsons: [],
    aboutUsMidJsons: [],
    aboutUsBottomJsons: [],
    contactUsView: [],
    contactUsViewJson: [],
    languages: [],
    toursView: [],
    toursDetail: [],
    mainTours: {
        tours: [],
        toursJson: [],
    },
    toursPage:[],
    isPopular : [],
    toursDetailImageJson: [],
    allToursDetail: [],
    toursviewJson : [],
    categories : [],
    service : [],
    serviceView : [],
}
const getters = {
    getCallout: state => state.callout,
    getMenus: state => state.menus,
    getTopBanners: state => state.topBanners,
    getMidBanners: state => state.midBanners,
    getSlider: state => state.slider,
    getHomeTours: state => state.hometours,
    getFooter: state => state.footer,
    getFooterJsons: state => state.footerjsons,
    getAboutUs: state => state.aboutUs,
    getAboutUsTopJsons: state => state.aboutUsTopJsons,
    getAboutUsMidJsons: state => state.aboutUsMidJsons,
    getAboutUsBottomJsons: state => state.aboutUsBottomJsons,
    getContactUsView: state => state.contactUsView,
    getContactUsViewJson: state => state.contactUsViewJson,
    getLanguages: state => state.languages,
    getToursView: state => state.toursView,
    getToursDetail: state => state.toursDetail,
    getMainTours: state => state.mainTours,
    getToursPage: state => state.toursPage,
    getIsPopular: state => state.isPopular,
    getToursDetailImageJson: state => state.toursDetailImageJson,
    getAllToursDetail: state => state.allToursDetail,
    getToursViewJson: state => state.toursviewJson,
    getCategories: state => state.categories,
    getService: state => state.service,
    getServiceView: state => state.serviceView,



}
const mutations = {
    setCallout(state, payload) {
        state.callout = payload
    },
    setMenus(state, payload) {
        state.menus = payload
    },
    setTopBanners(state, payload) {
        state.topBanners = payload
    },
    setMidBanners(state, payload) {
        state.midBanners = payload
    },
    setSlider(state, payload) {
        state.slider = payload
    },
    setHomeTours(state, payload) {
        state.hometours = payload
    },
    setFooter(state, payload) {
        state.footer = payload
    },
    setFooterJsons(state, payload) {
        state.footerjsons = payload
    },
    setAboutUs(state, payload) {
        state.aboutUs = payload
    },
    setAboutUsTopJsons(state, payload) {
        state.aboutUsTopJsons = payload
    },
    setAboutUsMidJsons(state, payload) {
        state.aboutUsMidJsons = payload
    },
    setAboutUsBottomJsons(state, payload) {
        state.aboutUsBottomJsons = payload
    },
    setContactUsView(state, payload) {
        state.contactUsView = payload
    },
    setContactUsViewJson(state, payload) {
        state.contactUsViewJson = payload
    },
    setLanguages(state, payload) {
        state.languages = payload
    },
    setToursView(state, payload) {
        state.toursView = payload
    },
    setToursDetail(state, payload) {
        state.mainTours.toursJson = payload
    },
    setMainTours(state, payload) {
        state.mainTours.tours = payload
    },
    setToursPage(state, payload) {
        state.toursPage = payload
    },
    setIsPopular(state, payload) {
        state.isPopular = payload
    },
    setToursDetailImageJson(state, payload) {
        state.toursDetailImageJson = payload
    },
    setAllToursDetail(state, payload) {
        state.allToursDetail = payload
    },
    setResetToursJson(state, payload) {
        state.mainTours.toursJson = payload
    },
    setToursViewJson(state, payload) {
        state.toursviewJson = payload
    },
    setCategories(state, payload) {
        state.categories = payload
    },
    setService(state, payload) {
        state.service = payload
    },
    setServiceView(state, payload) {
        state.serviceView = payload
    }

}
const actions = {
    async getMenusHandler({ commit }, payload) {
        try {
            const response = await axiosInstance.get(`menu/all/${payload}`)
            if (response.status === 200) {
                commit('setMenus', response.data)
            }
        } catch (error) {
            console.log(error)
        }
    },
    async getCalloutHandler({ commit }, payload) {
        try {
            const response = await axiosInstance.get(`callout/all/${payload}`)
            if (response.status === 200) {
                commit('setCallout', response.data)
            }
        } catch (error) {
            console.log(error)
        }
    },
    async getTopBannersHandler({ commit }) {
        try {
            const response = await axiosInstance.get('topbanner')
            if (response.status === 200) {
                commit('setTopBanners', response.data)
            }
        } catch (error) {
            console.log(error)
        }
    },
    async getMidBannersHandler({ commit }, payload) {
        try {
            const response = await axiosInstance.get(`midbanner/all/${payload}`)
            if (response.status === 200) {
                commit('setMidBanners', response.data)
            }
        } catch (error) {
            console.log(error)
        }
    },
    async getSliderHandler({ commit }, payload) {
        try {
            const response = await axiosInstance.get(`slider/all/${payload}`)
            if (response.status === 200) {
                commit('setSlider', response.data)
            }
        } catch (error) {
            console.log(error)
        }
    },
    async getHomeToursHandler({ commit }, payload) {
        try {
            const response = await axiosInstance.get(`hometours/all/${payload}`)
            if (response.status === 200) {
                commit('setHomeTours', response.data)
            }
        } catch (error) {
            console.log(error)
        }
    },
    async getFooterHandler({ commit }, payload) {
        try {
            const response = await axiosInstance.get(`footer/all/${payload}`)
            if (response.status === 200) {
                commit('setFooter', response.data)
            }
        } catch (error) {
            console.log(error)
        }
    },
    async getFooterJsonsHandler({ commit }, payload) {
        try {
            const response = await axiosInstance.get(`footer/all/${payload}`)
            if (response.status === 200) {
                var jsonbitches;
                response.data.forEach(function (item) {
                    item.footerMidContent = JSON.parse(item.footerMidContent);
                    jsonbitches = item.footerMidContent;
                });
                commit('setFooterJsons', jsonbitches)
            }
        } catch (error) {
            console.log(error)
        }
    },
    async getAboutUsHandler({ commit }, payload) {
        try {
            const response = await axiosInstance.get(`aboutus/all/${payload}`)
            if (response.status === 200) {
                var AboutUsTopJson, AboutUsMidJson, AboutUsBottomJson;
                response.data.forEach(function (AboutUsItem) {
                    AboutUsItem.topContentJson = JSON.parse(AboutUsItem.topContentJson);
                    AboutUsItem.midContentJson = JSON.parse(AboutUsItem.midContentJson);
                    AboutUsItem.bottomContentImage = JSON.parse(AboutUsItem.bottomContentImage);
                    AboutUsTopJson = AboutUsItem.topContentJson;
                    AboutUsMidJson = AboutUsItem.midContentJson;
                    AboutUsBottomJson = AboutUsItem.bottomContentImage;
                });
                commit('setAboutUs', response.data)
                commit('setAboutUsTopJsons', AboutUsTopJson)
                commit('setAboutUsMidJsons', AboutUsMidJson)
                commit('setAboutUsBottomJsons', AboutUsBottomJson)
            }
        } catch (error) {
            console.log(error)
        }
    },
    async getContactUsViewHandler({ commit }, payload) {
        try {
            const response = await axiosInstance.get(`contactusview/all/${payload}`)
            if (response.status === 200) {
                var ContactUsViewJson;
                response.data.forEach(function (ContactUsViewItem) {
                    ContactUsViewItem.contactDescriptionJson = JSON.parse(ContactUsViewItem.contactDescriptionJson);
                    ContactUsViewJson = ContactUsViewItem.contactDescriptionJson;
                });
                commit('setContactUsView', response.data)
                commit('setContactUsViewJson', ContactUsViewJson)
            }
        } catch (error) {
            console.log(error)
        }
    },
    async getLanguagesHandler({ commit }) {
        try {
            const response = await axiosInstance.get('language')
            if (response.status === 200) {
                commit('setLanguages', response.data)
            }
        } catch (error) {
            console.log(error)
        }
    },
    async getToursViewHandler({ commit }, payload) {
        try {
            const response = await axiosInstance.get(`toursview/all/${payload}`)
            if (response.status === 200) {
                    var ToursViewJson;
                    response.data.forEach(function (ToursViewItems) {
                        ToursViewItems.tourHeader = JSON.parse(ToursViewItems.tourHeader);
                        ToursViewJson = ToursViewItems.tourHeader;
                });
                commit('setToursView', response.data)
                commit('setToursViewJson', ToursViewJson)
            }
        } catch (error) {
            console.log(error)
        }
    },
    async getToursDetailHandler({ commit },payload) {
        try {
            const response = await axiosInstance.get(`tourdetails/all/${payload.tourId}/${payload.langIds}`)
            if (response.status === 200) {
                commit('setToursDetail', response.data)
            }
        } catch (error) {
            console.log(error)
        }
    },
    async getAllToursDetailHandler({ commit },payload) {
        try {
            const response = await axiosInstance.get(`tourdetails/all/${payload}`)
            if (response.status === 200) {
                commit('setAllToursDetail', response.data)
            }
        } catch (error) {
            console.log(error)
        }
    },
    async getMainToursHandler({ commit, dispatch }, payload) {
        try {
            const response = await axiosInstance.get(`maintours/all/${payload}`)
            if (response.status === 200) {
                commit('setMainTours', response.data)

            }
        } catch (error) {
            console.log(error)
        }
    },
    async getToursPageHandler({ commit }, payload) {
        try {
            const response = await axiosInstance.get(`tourdetails/details/${payload}`)
            if (response.status === 200) {
                var ToursDetailJson;
                    ToursDetailJson = JSON.parse(response.data.tourImage);
                commit('setToursPage', response.data)
                commit('setToursDetailImageJson', ToursDetailJson)
            }
        } catch (error) {
            console.log(error)
        }
    },
    async getIsPopularHandler({ commit }, payload) {
        try {
            const response = await axiosInstance.get(`tourdetails/popular/${payload.ısPopular}/${payload.langIds}`)
            if (response.status === 200) {
                commit('setIsPopular', response.data)
            }
        } catch (error) {
            console.log(error)
        }
    },
    async getCategoriesHandler({ commit , dispatch}, payload) {
        try {
            const response = await axiosInstance.get(`categories/${payload.id}`)
            if (response.status === 200) {
                commit('setCategories', response.data)
                dispatch('getToursDetailHandler', { tourId: response.data.id, langIds: payload.langIds})
            }
        } catch (error) {
            console.log(error)
        }
    },
    async getServiceHandler({ commit }, payload) {
        try {
            const response = await axiosInstance.get(`service/all/${payload}`)
            if (response.status === 200) {
                commit('setService', response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }, 
    async getServiceViewHandler({ commit }, payload) {
        try {
            const response = await axiosInstance.get(`serviceview/all/${payload}`)
            if (response.status === 200) {
                commit('setServiceView', response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
}


export default {
    state,
    getters,
    mutations,
    actions
}