<template>
    <p-card class="sg-fields">
        <p-card-header title="Form Fields"></p-card-header>

        <p-card-body>
            <!-- Title Field -->
            <div class="row">
                <div class="col w-full">
                    <h3>Title Field</h3>
                </div>
                <div class="col w-full xl:w-1/3">
                    <p-title
                        name="title"
                        label="Title"
                        help="What is your name?"
                        autocomplete="off"
                        placeholder="Name">
                    </p-title>
                </div>

                <div class="col w-full xl:w-1/3">
                    <p-title
                        name="title_success"
                        label="Title Success"
                        help="What is your name?"
                        autocomplete="off"
                        required
                        placeholder="Name" 
                        value="Jean-Luc Picard"
                        :hasSuccess="true"
                        successMessage="That looks like a good name!">
                    </p-title>
                </div>

                <div class="col w-full xl:w-1/3">
                    <p-title
                        name="title_error"
                        label="Title Error"
                        help="What is your name?"
                        autocomplete="off"
                        required
                        placeholder="Name" 
                        value="Tea, Earl Gray, Hot"
                        :hasError="true"
                        errorMessage="That is not a valid name.">
                    </p-title>
                </div>
            </div>

            <hr>

            <!-- Input Field -->
            <div class="row">
                <div class="col w-full">
                    <h3>Text Input Field</h3>
                </div>
                
                <div class="col w-full xl:w-1/3">
                    <p-input
                        name="input"
                        label="Input"
                        help="Help text for input."
                        autocomplete="off">
                    </p-input>
                </div>

                <div class="col w-full xl:w-1/3">
                    <p-input
                        name="input_success"
                        label="Input Success"
                        help="What shall we call you?"
                        autocomplete="off"
                        required 
                        value="Jean-Luc Picard"
                        :hasSuccess="true"
                        successMessage="This name is valid!">
                    </p-input>
                </div>

                <div class="col w-full xl:w-1/3">
                    <p-input
                        name="input_error"
                        type="email"
                        label="Input Error"
                        help="What is your email address?"
                        autocomplete="off"
                        required
                        placeholder="Name" 
                        value="make.it.so@"
                        :hasError="true"
                        errorMessage="This email is invalid.">
                    </p-input>
                </div>
            </div>

            <hr>

            <!-- Password Field -->
            <div class="row">
                <div class="col w-full">
                    <h3>Password Input Field</h3>
                </div>

                <div class="col w-full md:w-1/3">
                    <p-password
                        name="password"
                        label="password"
                        required
                        help="Please enter a password.">
                    </p-password>
                </div>

                <div class="col w-full md:w-1/3">
                    <p-password
                        name="password_error"
                        label="Password Error"
                        required
                        help="Please enter a password."
                        value="Password"
                        :hasSuccess="true"
                        successMessage="Thank you!">
                    </p-password>
                </div>

                <div class="col w-full md:w-1/3">
                    <p-password
                        name="password_success"
                        label="Password Success"
                        required
                        help="Please enter a password."
                        value="Password"
                        :hasError="true"
                        errorMessage="This password is incorrect.">
                    </p-password>
                </div>
            </div>

            <hr>

            <!-- Number Field -->
            <div class="row">
                <div class="col w-full">
                    <h3>Number Input Field</h3>
                </div>

                <div class="col w-full sm:w-1/2 lg:w-1/4">
                    <p-number
                        name="number"
                        label="Number"
                        :value="0"
                        :min="1"
                        :max="200"
                        :steps="5"
                        help="Choose an integer divisible by 5.">
                    </p-number>
                </div>
                
                <div class="col w-full sm:w-1/2 lg:w-1/4">
                    <p-number
                        name="number_success"
                        label="Number Success"
                        :required="true"
                        :value="5"
                        :min="1"
                        :max="200"
                        :steps="5"
                        help="Choose an integer divisible by 5."
                        :hasSuccess="true"
                        successMessage="This value is valid!">
                    </p-number>
                </div>

                <div class="col w-full sm:w-1/2 lg:w-1/4">
                    <p-number
                        name="number_error"
                        label="Number Error"
                        :required="true"
                        :value="7"
                        :min="1"
                        :max="200"
                        :steps="5"
                        help="Choose an integer divisible by 5."
                        :hasError="true"
                        errorMessage="This is not a valid integer.">
                    </p-number>
                </div>
            </div>
            
            <hr>

            <!-- Textarea Field -->
            <div class="row">
                <div class="col w-full">
                    <h3>Textarea Field</h3>
                </div>

                <div class="col w-full xl:w-1/3">
                    <p-textarea
                        name="textarea"
                        label="Textarea"
                        help="Help text for textarea."
                        autocomplete="off"
                        :rows="5">
                    </p-textarea>
                </div>

                <div class="col w-full xl:w-1/3">
                    <p-textarea
                        name="textarea_success"
                        label="Textarea Success"
                        help="Enter a message."
                        autocomplete="off"
                        required 
                        value="You cannot explain away a wantonly immoral act because you think that it is connected to some higher purpose."
                        :hasSuccess="true"
                        successMessage="This value is valid!"
                        :rows="5">
                    </p-textarea>
                </div>

                <div class="col w-full xl:w-1/3">
                    <p-textarea
                        name="textarea_error"
                        label="Textarea Error"
                        help="Enter a message."
                        autocomplete="off"
                        required
                        placeholder="Name" 
                        value="bIHeghvIpchughbIHeghpu'."
                        :hasError="true"
                        errorMessage="This value is invalid."
                        :rows="5">
                    </p-textarea>
                </div>
            </div>

            <hr>

            <!-- Select Field -->
            <div class="row">
                <div class="col w-full">
                    <h3>Select Field</h3>
                </div>

                <div class="col w-full xl:w-1/3">
                    <p-select
                        name="select"
                        label="Select"
                        help="Help text for select dropdown."
                        :options="[
                            {
                                'label': 'Option 1',
                                'value': 'option-1',
                            },
                            {
                                'label': 'Option 2',
                                'value': 'option-2',
                            },
                            {
                                'label': 'Option 3',
                                'value': 'option-3',
                            },
                            {
                                'label': 'Option 4',
                                'value': 'option-4',
                            },
                            {
                                'label': 'Option 5',
                                'value': 'option-5',
                            }
                        ]">
                    </p-select>
                </div>

                <div class="col w-full xl:w-1/3">
                    <p-select
                        name="select_success"
                        label="Select Success"
                        value="option-1"
                        help="Help text for select dropdown."
                        :hasSuccess="true"
                        successMessage="This value is valid!"
                        :options="[
                            {
                                'label': 'Option 1',
                                'value': 'option-1',
                            },
                            {
                                'label': 'Option 2',
                                'value': 'option-2',
                            },
                            {
                                'label': 'Option 3',
                                'value': 'option-3',
                            },
                            {
                                'label': 'Option 4',
                                'value': 'option-4',
                            },
                            {
                                'label': 'Option 5',
                                'value': 'option-5',
                            }
                        ]">
                    </p-select>
                </div>

                <div class="col w-full xl:w-1/3">
                    <p-select
                        name="select_error"
                        label="Select Error"
                        help="Help text for select dropdown."
                        :hasError="true"
                        errorMessage="A selected option is required."
                        :options="[
                            {
                                'label': 'Option 1',
                                'value': 'option-1',
                            },
                            {
                                'label': 'Option 2',
                                'value': 'option-2',
                            },
                            {
                                'label': 'Option 3',
                                'value': 'option-3',
                            },
                            {
                                'label': 'Option 4',
                                'value': 'option-4',
                            },
                            {
                                'label': 'Option 5',
                                'value': 'option-5',
                            }
                        ]">
                    </p-select>
                </div>

                <div class="col w-full xl:w-1/3">
                    <p-select
                        name="select_multiple"
                        label="Select Multiple"
                        help="Help text for select dropdown."
                        :multiple="true"
                        :showControls="true"
                        :filterable="true"
                        :options="[
                            {
                                'label': 'Option 1',
                                'value': 'option-1',
                            },
                            {
                                'label': 'Option 2',
                                'value': 'option-2',
                            },
                            {
                                'label': 'Option 3',
                                'value': 'option-3',
                            },
                            {
                                'label': 'Option 4',
                                'value': 'option-4',
                            },
                            {
                                'label': 'Option 5',
                                'value': 'option-5',
                            },
                            {
                                'label': 'Option 6',
                                'value': 'option-6',
                            },
                            {
                                'label': 'Option 7',
                                'value': 'option-7',
                            },
                            {
                                'label': 'Option 8',
                                'value': 'option-8',
                            },
                            {
                                'label': 'Option 9',
                                'value': 'option-9',
                            },
                            {
                                'label': 'Option 10',
                                'value': 'option-10',
                            }
                        ]">
                    </p-select>
                </div>
            </div>

            <hr>

            <!-- Upload Field -->
            <div class="row">
                <div class="col w-full">
                    <h3>Upload Field</h3>
                </div>

                <div class="col w-full lg:w-1/2">
                    <p-upload
                        name="upload"
                        label="Upload"
                        required
                        help="Upload an image."
                        :multiple="true">
                    </p-upload>
                </div>
            </div>
            <hr>

            <!-- Checkbox & Radio -->
            <div class="row">
                <div class="col w-full">
                    <h3>Checkboxes and Radios</h3>
                </div>

                <div class="col w-full md:w-1/2">
                    <p-fieldset 
                        label="Checkboxes" 
                        help="Select all that apply.">
                        <p-checkbox
                            id="checkbox_0"
                            key="0"
                            name="checkbox">
                            Checkbox 1
                        </p-checkbox>

                        <p-checkbox
                            id="checkbox_1"
                            key="1"
                            name="checkbox">
                            Checkbox 2
                        </p-checkbox>

                        <p-checkbox
                            id="checkbox_2"
                            key="2"
                            name="checkbox">
                            Checkbox 3
                        </p-checkbox>

                        <p-checkbox
                            id="checkbox_3"
                            key="3"
                            name="checkbox">
                            Checkbox 4
                        </p-checkbox>

                        <p-checkbox
                            id="checkbox_4"
                            key="4"
                            name="checkbox">
                            Checkbox 5
                        </p-checkbox>
                    </p-fieldset>
                </div>

                <div class="col w-full md:w-1/2">
                    <p-fieldset 
                        label="Radios" 
                        help="Select an option.">
                        <p-radio
                            id="radio_0"
                            key="0"
                            name="radio">
                            Radio 1
                        </p-radio>

                        <p-radio
                            id="radio_1"
                            key="1"
                            name="radio">
                            Radio 2
                        </p-radio>

                        <p-radio
                            id="radio_2"
                            key="2"
                            name="radio">
                            Radio 3
                        </p-radio>

                        <p-radio
                            id="radio_3"
                            key="3"
                            name="radio">
                            Radio 4
                        </p-radio>

                        <p-radio
                            id="radio_4"
                            key="4"
                            name="radio">
                            Radio 5
                        </p-radio>
                    </p-fieldset>
                </div>

                <div class="col w-full md:w-1/2">
                    <p-fieldset
                        label="Checkboxes Inline" 
                        help="Select all that apply.">
                        <p-checkbox
                            id="checkbox_inline_0"
                            key="0"
                            name="checkbox"
                            :inline="true">
                            Checkbox 1
                        </p-checkbox>

                        <p-checkbox
                            id="checkbox_inline_1"
                            key="1"
                            name="checkbox"
                            :inline="true">
                            Checkbox 2
                        </p-checkbox>

                        <p-checkbox
                            id="checkbox_inline_2"
                            key="2"
                            name="checkbox"
                            :inline="true">
                            Checkbox 3
                        </p-checkbox>

                        <p-checkbox
                            id="checkbox_inline_3"
                            key="3"
                            name="checkbox"
                            :inline="true">
                            Checkbox 4
                        </p-checkbox>

                        <p-checkbox
                            id="checkbox_inline_4"
                            key="4"
                            name="checkbox"
                            :inline="true">
                            Checkbox 5
                        </p-checkbox>
                    </p-fieldset>
                </div>

                <div class="col w-full md:w-1/2">
                    <p-fieldset 
                        label="Radios" 
                        help="Select an option.">
                        <p-radio
                            id="radio_inline_0"
                            key="0"
                            name="radio"
                            :inline="true">
                            Radio 1
                        </p-radio>

                        <p-radio
                            id="radio_inline_1"
                            key="1"
                            name="radio"
                            :inline="true">
                            Radio 2
                        </p-radio>

                        <p-radio
                            id="radio_inline_2"
                            key="2"
                            name="radio"
                            :inline="true">
                            Radio 3
                        </p-radio>

                        <p-radio
                            id="radio_inline_3"
                            key="3"
                            name="radio"
                            :inline="true">
                            Radio 4
                        </p-radio>

                        <p-radio
                            id="radio_inline_4"
                            key="4"
                            name="radio"
                            :inline="true">
                            Radio 5
                        </p-radio>
                    </p-fieldset>
                </div>

                <div class="col w-full">
                    <h3>Single Checkbox w/ Content</h3>
                </div>

                <div class="col w-full md:w-1/2">
                    <p-checkbox-single
                        id="checkbox_single"
                        name="checkbox_single"
                        :required="true">
                        <p>I have read and understand this website's <a href="#">Terms of Service</a> and agree with all policies.</p>
                    </p-checkbox-single>
                </div>
                
                <div class="col w-full md:w-1/2">
                    <p-checkbox-single
                        id="checkbox_single_error"
                        name="checkbox_single_error"
                        :hasError="true"
                        errorMessage="This field is required to proceed"
                        :required="true">
                        <p>I have read and understand this website's <a href="#">Terms of Service</a> and agree with all policies.</p>
                    </p-checkbox-single>
                </div>
            </div>
        </p-card-body>
    </p-card> 
</template>

<script>
    export default {}
</script>