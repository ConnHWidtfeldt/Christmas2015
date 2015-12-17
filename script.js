function change(prio, price)
{
    $(".item").css("height", "0px");
    var results = 0;
    $(".item").each(function(i, obj) {
        
        if (prio != 0 && price != 0)
        {
            if ($(this).hasClass(prio) && $(this).hasClass(price))
            {
                $(this).css("height", "128px");
                results++;
            }
        }
        else if (prio == 0 && price != 0)
        {
            if ($(this).hasClass(price))
            {
                $(this).css("height", "128px");
                results++;
            }
        }
        else if (prio != 0 && price == 0)
        {
            if ($(this).hasClass(prio))
            {
                $(this).css("height", "128px");
                results++;
            }
        }
        else {
            $(".item").css("height", "128px");
            results++;
        }
    });
    if (results <= 0)
    {
        $(".no-results").css("display", "block");
        $(".wishes").hide();
    }
    else
    {
        $(".no-results").css("display", "none");
        $(".wishes").show();
    }
}

$( document ).ready(function() {
    var prio = 0;
    var price = 0;
    
    change(prio, price);
    
    $("input[name$='priority']").click(function() {
        var value = $(this).attr("id");
        if (value == "all-priority-button")
            {
                prio = 0;
            }
        else if (value == "extreme-priority-button")
            {
                prio = "extreme-priority";
            }
        else if (value == "high-priority-button")
            {
                prio = "high-priority";
            }
        else if (value == "medium-priority-button")
            {
                prio = "medium-priority";
            }
        else if (value == "low-priority-button")
            {
                prio = "low-priority";
            }
        change(prio, price);
    }); 
    
    $("input[name$='price']").click(function() {
        var value = $(this).attr("id");
        if (value == "all-price-button")
            {
                price = 0;
            }
        else if (value == "expensive-price-button")
            {
                price = "expensive";
            }
        else if (value == "high-price-button")
            {
                price = "high";
            }
        else if (value == "medium-price-button")
            {
                price = "medium";
            }
        else if (value == "low-price-button")
            {
                price = "cheap";
            }
        change(prio, price);
    });
});