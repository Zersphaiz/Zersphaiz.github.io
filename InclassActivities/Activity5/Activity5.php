<style>
    label {
        display: inline-block;
        width: 75px;
        text-align: left;
    }
    select, input[type="text"] {
        width: 150px;
        margin-right: 10px;
    }
    .general {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    #convert {
        position: absolute;
        top: 60;
        left: 417.5;
    }
    #to_currency {
        position: absolute;
        top: 30;
        left: 330;
        width: 150px;
    }
    #converted_amount {
        position: absolute;
        top: 15px;
        left: 90px;
    }
    #text_currency2 {
        position: absolute;
        top: 15px;
        left: 251px;
    }

</style>

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $exchange_rates = array(
        'USD' => array('EUR' => 0.91, 'CAD' => 1.36),
        'CAD' => array('USD' => 0.74, 'EUR' => 0.68),
        'EUR' => array('USD' => 1.10, 'CAD' => 1.47),
    );

    $amount = $_POST['amount'];
    $from_currency = $_POST['from_currency'];
    $to_currency = $_POST['to_currency'];

    if ($from_currency === $to_currency) {
        $converted_amount = $amount;
    } else {
        $converted_amount = $amount * $exchange_rates[$from_currency][$to_currency];
    }
}
?>

<div class="general">
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
        <div>
            <label for="amount">From:</label>
            <input type="text" name="amount" id="amount" value="<?php echo isset($amount) ? $amount : ''; ?>">

            <label for="amount">Currency:</label>
            <select name="from_currency" id="from_currency">
                <option value="USD"<?php if (isset($from_currency) && $from_currency == 'USD') echo ' selected'; ?>>US Dollar</option>
                <option value="CAD"<?php if (isset($from_currency) && $from_currency == 'CAD') echo ' selected'; ?>>Canadian Dollar</option>
                <option value="EUR"<?php if (isset($from_currency) && $from_currency == 'EUR') echo ' selected'; ?>>Euro</option>
            </select>
        </div>

        <div>
            <label for="to_currency">To:</label>
            <p id="text_currency2">Currency:</p>
            <select name="to_currency" id="to_currency">
                <option value="USD"<?php if (isset($to_currency) && $to_currency == 'USD') echo ' selected'; ?>>US Dollar</option>
                <option value="CAD"<?php if (isset($to_currency) && $to_currency == 'CAD') echo ' selected'; ?>>Canadian Dollar</option>
                <option value="EUR"<?php if (isset($to_currency) && $to_currency == 'EUR') echo ' selected'; ?>>Euro</option>
            </select>
            <input type="submit" value="Convert" id="convert">
        </div>
    </form>
    
    <?php if(isset($converted_amount)): ?>
        <p id="converted_amount"><?php echo number_format($converted_amount, 2); ?> </p>
    <?php endif; ?>
</div>