package com.luv2code.ecommerce.dto;

import lombok.Data;
import lombok.NonNull;

@Data
public class PurchaseResponse {
    //@NonNull or private final
    private final String orderTrackingNumber;

}
