import { ArticlesStore } from "./ArticlesStore";
import { ConfigurationStore } from "./ConfigurationStore";
// import { I18nStore } from "./I18nStore";
// import { PartnerStore } from "./PartnerStore";
import { TicketingStore } from "./TicketingStore";

export const configuration = new ConfigurationStore();
export const articles = new ArticlesStore();
export const ticketing = new TicketingStore();
// export const i18n = new I18nStore();
// export const partner = new PartnerStore();
