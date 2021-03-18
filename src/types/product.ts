export const Product {
categories: string[];
conditionals: Conditionals[]
created: 1616038908;
description: "<p>Mais bonito de todos existentes</p>";
has: {digital_delivery: false, physical_delivery: true, images: true, video: false, rich_embed: false};
id: "prod_bO6J5a3p7wEjpK";
media: {type: "image", source: "https://cdn.chec.io/merchants/24825/assets/gWmJSQNLOU4zOMKf|ifone.png"};
name: "Iphone SE"
price: {raw: 1200, formatted: "1,200.00", formatted_with_symbol: "$1,200.00", formatted_with_code: "1,200.00 USD"}
seo: {title: null, description: null}
sku?: string;
sort_order: 0
updated?: number;
}

export const Conditionals {
  collects_billing_address: boolean
  collects_extra_fields:  boolean;
  collects_fullname:  boolean;
  collects_shipping_address:  boolean;
  has_digital_delivery:  boolean;
  has_images:  boolean;
  has_physical_delivery:  boolean;
  has_rich_embed:  boolean;
  has_video:  boolean;
  is_active:  boolean;
  is_free:  boolean;
  is_inventory_managed:  boolean;
  is_pay_what_you_want:  boolean;
  is_sold_out:  boolean;
  is_tax_exempt:  boolean;
}